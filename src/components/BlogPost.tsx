import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Calendar, Clock, User, Tag, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import { BlogPost as BlogPostType } from '../types'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([])

  useEffect(() => {
    if (!slug) return

    // Find the post by slug
    const foundPost = blogPosts.find(p => p.slug === slug)
    if (foundPost) {
      setPost(foundPost)
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3)
      setRelatedPosts(related)

      // Update page title and meta description for SEO
      document.title = `${foundPost.title} | SailAgency Blog`
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', foundPost.excerpt)
      }
    } else {
      // Post not found, redirect to blog
      navigate('/blog')
    }
  }, [slug, navigate])

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleShare = (platform: string): void => {
    if (!post) return

    const url = window.location.href
    const title = post.title
    
    let shareUrl = ''
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        return
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }

  const handleRelatedPostClick = (relatedSlug: string): void => {
    navigate(`/blog/${relatedSlug}`)
    window.scrollTo(0, 0)
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải bài viết...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="container-custom py-8">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại Blog
          </button>
          
          <div className="max-w-4xl">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            
            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {formatDate(post.publishDate)}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime}
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Chia sẻ:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="aspect-video rounded-xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br>').replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">$1</h2>').replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-blue-900 mt-6 mb-3">$1</h3>') 
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {post.author}
                </h3>
                <p className="text-gray-600">
                  Chuyên gia tư vấn LLC và thuế doanh nghiệp tại Mỹ với hơn 5 năm kinh nghiệm. 
                  Đã hỗ trợ hàng trăm doanh nghiệp Việt Nam thành lập và phát triển tại thị trường Mỹ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              Bài viết liên quan
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  onClick={() => handleRelatedPostClick(relatedPost.slug)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    
                    <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedPost.author}</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sẵn sàng đăng ký LLC?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình kinh doanh tại Mỹ với sự hỗ trợ chuyên nghiệp từ SailAgency
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Liên hệ tư vấn miễn phí
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogPost