import React from 'react'
import { Check, Star } from 'lucide-react'
import { PricingPlan } from '../types'

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Cơ bản',
      price: '$199',
      description: 'Phù hợp cho startup và doanh nghiệp nhỏ',
      features: [
        'Đăng ký LLC tại bang bạn chọn',
        'Certificate of Formation',
        'Registered Agent (1 năm)',
        'Hỗ trợ email cơ bản',
        'Hướng dẫn vận hành LLC'
      ],
      popular: false,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Chuyên nghiệp',
      price: '$399',
      description: 'Lựa chọn phổ biến cho doanh nghiệp phát triển',
      features: [
        'Tất cả tính năng gói Cơ bản',
        'Operating Agreement tùy chỉnh',
        'EIN Number (Mã số thuế)',
        'Tư vấn pháp lý 1-1',
        'Hỗ trợ điện thoại ưu tiên',
        'Banking Resolution',
        'Hỗ trợ mở tài khoản ngân hàng'
      ],
      popular: true,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Doanh nghiệp',
      price: '$699',
      description: 'Giải pháp toàn diện cho doanh nghiệp lớn',
      features: [
        'Tất cả tính năng gói Chuyên nghiệp',
        'Trademark Search & Filing',
        'Compliance Calendar',
        'Annual Report Filing',
        'Tư vấn thuế chuyên sâu',
        'Hỗ trợ 24/7 dedicated',
        'Legal Document Templates',
        'Business License Research'
      ],
      popular: false,
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const scrollToContact = (): void => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Bảng giá minh bạch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn gói dịch vụ phù hợp với nhu cầu và quy mô doanh nghiệp của bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl border-2 overflow-hidden ${
                plan.popular 
                  ? 'border-blue-600 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-blue-200 hover:shadow-lg'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Phổ biến nhất</span>
                  </div>
                </div>
              )}

              {/* Image Header */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 ml-2">một lần</span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Chọn gói {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info with background */}
        <div className="text-center mt-12 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Money and documents"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>
          
          <div className="relative z-10 p-6 text-white">
            <p className="mb-2">
              <strong>Cam kết:</strong> Hoàn tiền 100% nếu không hài lòng trong 30 ngày
            </p>
            <p className="text-sm text-blue-200">
              Tất cả gói đều bao gồm phí bang (State Fee) và không có phí ẩn
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing