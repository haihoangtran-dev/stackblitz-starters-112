import React from 'react'
import { MapPin, FileText, CheckCircle } from 'lucide-react'
import { ProcessStep } from '../types'

const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      icon: MapPin,
      title: 'Chọn bang đăng ký',
      description: 'Tư vấn và lựa chọn bang phù hợp nhất cho mục tiêu kinh doanh của bạn',
      details: ['Delaware - Ưu đãi thuế tốt nhất', 'Wyoming - Chi phí thấp', 'Nevada - Bảo mật cao'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: FileText,
      title: 'Điền thông tin LLC',
      description: 'Hoàn thành form đăng ký với thông tin công ty và thành viên',
      details: ['Tên công ty', 'Địa chỉ đăng ký', 'Thông tin thành viên'],
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: CheckCircle,
      title: 'Nhận tài liệu LLC',
      description: 'Nhận đầy đủ tài liệu pháp lý và hướng dẫn vận hành LLC',
      details: ['Certificate of Formation', 'Operating Agreement', 'EIN Number'],
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  const scrollToContact = (): void => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Quy trình đăng ký đơn giản
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chỉ cần 3 bước đơn giản để có LLC hoàn chỉnh và sẵn sàng hoạt động
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              <div className="w-8 h-8"></div>
              <div className="flex-1 h-0.5 bg-blue-200 mt-4 mx-8"></div>
              <div className="w-8 h-8"></div>
              <div className="flex-1 h-0.5 bg-blue-200 mt-4 mx-8"></div>
              <div className="w-8 h-8"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Image */}
                <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step number */}
                <div className="flex justify-center mb-6 -mt-8 relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    Bước {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="bg-white rounded-lg p-4 space-y-2 shadow-sm">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Bắt đầu quy trình ngay
          </button>
        </div>
      </div>
    </section>
  )
}

export default Process