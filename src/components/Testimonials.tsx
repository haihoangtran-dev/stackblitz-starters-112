import React from 'react'
import { Star, Quote } from 'lucide-react'
import { Testimonial } from '../types'

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Nguyễn Minh Anh',
      company: 'Tech Startup',
      content: 'SailAgency đã giúp tôi đăng ký LLC một cách nhanh chóng và chuyên nghiệp. Đội ngũ hỗ trợ rất tận tình, giải đáp mọi thắc mắc chi tiết. Tôi đã tiết kiệm được rất nhiều thời gian và công sức.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Trần Văn Hùng',
      company: 'E-commerce Business',
      content: 'Dịch vụ tuyệt vời! Từ tư vấn chọn bang đến hoàn thành tài liệu, mọi thứ đều được thực hiện một cách chuyên nghiệp. Giá cả minh bạch, không có phí ẩn như tôi lo lắng.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lê Thị Mai',
      company: 'Consulting Firm',
      content: 'Tôi đã thử nhiều dịch vụ khác nhưng SailAgency là tốt nhất. Họ không chỉ đăng ký LLC mà còn hướng dẫn tôi cách vận hành và tuân thủ pháp luật. Rất đáng tin cậy!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hơn 1,000+ doanh nghiệp đã tin tưởng và sử dụng dịch vụ của SailAgency
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-blue-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats with background image */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>
          
          <div className="relative z-10 py-16 px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold mb-2">1,000+</div>
                <div className="text-blue-200">LLC đã đăng ký</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5 năm</div>
                <div className="text-blue-200">Kinh nghiệm</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials