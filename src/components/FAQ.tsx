import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FAQ as FAQType } from '../types'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs: FAQType[] = [
    {
      question: 'LLC là gì và tại sao tôi nên đăng ký LLC?',
      answer: 'LLC (Limited Liability Company) là loại hình doanh nghiệp kết hợp ưu điểm của công ty cổ phần và công ty hợp danh. LLC bảo vệ tài sản cá nhân của bạn khỏi nợ và trách nhiệm pháp lý của công ty, đồng thời có cấu trúc thuế linh hoạt và quy trình quản lý đơn giản.'
    },
    {
      question: 'Mất bao lâu để hoàn thành đăng ký LLC?',
      answer: 'Thông thường, quá trình đăng ký LLC mất 3-5 ngày làm việc sau khi chúng tôi nhận đầy đủ thông tin từ bạn. Thời gian có thể thay đổi tùy theo bang đăng ký và mùa cao điểm. Chúng tôi sẽ cập nhật tiến độ thường xuyên và thông báo ngay khi hoàn thành.'
    },
    {
      question: 'Tôi có cần có địa chỉ tại Mỹ để đăng ký LLC không?',
      answer: 'Bạn không cần phải có địa chỉ tại Mỹ để đăng ký LLC. Chúng tôi cung cấp dịch vụ Registered Agent với địa chỉ tại bang bạn đăng ký, đáp ứng đầy đủ yêu cầu pháp lý. Bạn có thể sống ở bất kỳ đâu trên thế giới và vẫn sở hữu LLC tại Mỹ.'
    },
    {
      question: 'Bang nào tốt nhất để đăng ký LLC?',
      answer: 'Lựa chọn bang phụ thuộc vào mục tiêu kinh doanh của bạn. Delaware phù hợp cho startup muốn gọi vốn, Wyoming có chi phí thấp và bảo mật cao, Nevada có ưu đãi thuế tốt. Chúng tôi sẽ tư vấn chi tiết để bạn chọn bang phù hợp nhất.'
    },
    {
      question: 'Tôi có cần EIN (Employer Identification Number) không?',
      answer: 'EIN là mã số thuế liên bang cần thiết để mở tài khoản ngân hàng, thuê nhân viên, và kê khai thuế. Ngay cả khi LLC chỉ có một thành viên, EIN vẫn rất hữu ích cho việc tách biệt tài chính cá nhân và doanh nghiệp. Chúng tôi hỗ trợ xin EIN miễn phí trong gói Chuyên nghiệp và Doanh nghiệp.'
    },
    {
      question: 'Chi phí duy trì LLC hàng năm là bao nhiêu?',
      answer: 'Chi phí duy trì LLC bao gồm: phí Registered Agent ($100-200/năm), phí Annual Report ($50-500 tùy bang), và các chi phí tuân thủ khác. Tổng chi phí thường từ $200-800/năm tùy bang. Chúng tôi cung cấp dịch vụ duy trì LLC với giá ưu đãi cho khách hàng hiện tại.'
    }
  ]

  const scrollToContact = (): void => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tìm hiểu thêm về dịch vụ đăng ký LLC và giải đáp những thắc mắc phổ biến
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vẫn có thắc mắc? Chúng tôi sẵn sàng tư vấn miễn phí
          </p>
          <button 
            onClick={scrollToContact}
            className="btn-primary"
          >
            Liên hệ tư vấn
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ