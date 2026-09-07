import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phoneNumber = '919820131217';
  const defaultMessage = encodeURIComponent(
    'Hello Leela Tubes, I have an enquiry regarding stainless steel pipes and tubes.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Leela Tubes on WhatsApp"
      id="whatsapp-cta-btn"
    >
      <span className="whatsapp-float__tooltip">Chat on WhatsApp</span>
      <div className="whatsapp-float__btn">
        <svg
          className="whatsapp-float__icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.781-.878-2.057-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.952 1.178-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.526-.075-.15-.676-1.63-.926-2.233-.244-.588-.492-.508-.676-.517-.175-.009-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.378.197 1.898.12.578-.087 1.781-.728 2.032-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.351zm-5.464 7.426h-.005c-1.859 0-3.682-.5-5.275-1.446l-.378-.225-3.924 1.029 1.047-3.824-.247-.393c-1.04-1.654-1.589-3.567-1.588-5.534.004-5.719 4.654-10.369 10.375-10.369 2.769.001 5.372 1.08 7.332 3.042 1.959 1.962 3.037 4.566 3.036 7.337-.004 5.721-4.654 10.372-10.373 10.372zm8.751-19.125c-2.336-2.339-5.445-3.627-8.752-3.628-6.824 0-12.381 5.556-12.384 12.383 0 2.181.569 4.31 1.65 6.183l-1.753 6.402 6.551-1.718c1.808.986 3.847 1.507 5.932 1.508h.005c6.824 0 12.382-5.557 12.385-12.384.001-3.307-1.286-6.417-3.624-8.746z" />
        </svg>
      </div>
      <span className="whatsapp-float__ping" aria-hidden="true" />
    </a>
  );
}
