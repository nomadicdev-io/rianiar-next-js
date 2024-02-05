import './FormLoader.scss'

const FormLoader = () => {
  return (
    <div className='r_form_loader'>
        <div className='r_form_loader_icon'>
        <svg x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" xmlSpace="preserve">
            <rect x="0" y="0" width="4" height="10" fill="#0A7EE8">
            <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="0" width="4" height="10" fill="#0A7EE8">
            <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.2s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="20" y="0" width="4" height="10" fill="#0A7EE8">
            <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.4s" dur="0.6s" repeatCount="indefinite" />
            </rect>
        </svg>
        </div>
    </div>
  )
}

export default FormLoader