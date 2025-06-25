import React from 'react'
import { Clock, Shield, DollarSign, Users, FileText, Headphones, DivideIcon as LucideIcon } from 'lucide-react'
import { Benefit } from '../types'

const Benefits: React.FC = () => {
  const benefits: Benefit[] = [
    {
      icon: Clock,
      title: 'Nhanh chóng',
      description: 'Hoàn thành đăng ký LLC trong 3-5 ngày làm việc, nhanh nhất thị trường',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Shield,
      title: 'Hỗ trợ pháp lý',
      description: 'Đội ngũ luật sư chuyên nghiệp hỗ trợ 24/7 trong suốt quá trình',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: DollarSign,
      title: 'Giá minh bạch',
      description: 'Không có phí ẩn, mọi chi phí được công khai rõ ràng từ đầu',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Users,
      title: 'Kinh nghiệm',
      description: 'Hơn 5 năm kinh nghiệm với 1,000+ LLC được đăng ký thành công',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: FileText,
      title: 'Tài liệu đầy đủ',
      description: 'Cung cấp đầy đủ tài liệu pháp lý và hướng dẫn vận hành LLC',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Headphones,
      title: 'Hỗ trợ sau bán',
      description: 'Tư vấn và hỗ trợ miễn phí trong 12 tháng sau khi hoàn thành',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Tại sao chọn SailAgency?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến dịch vụ đăng ký LLC chuyên nghiệp nhất 
            với quy trình tối ưu và hỗ trợ toàn diện
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <benefit.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits