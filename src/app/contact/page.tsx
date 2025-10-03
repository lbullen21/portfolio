import ContactLinks from '../../components/ContactLinks';

export default function Contact() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="md:text-center mb-8 md:mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I&apos;d love to hear from you! Whether you have a project in mind, 
            want to collaborate, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <ContactLinks />
      </div>
    </div>
  );
}