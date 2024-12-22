const About = () => {
  const sidebarItems = [
    {
      id: 1,
      title: "Exclusive Design",
      image:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1712596948/un21p5amgim7vbc3yokf.jpg",
      color: "text-orange-500",
    },
    {
      id: 2,
      title: "Digital Sign",
      image:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1712596948/un21p5amgim7vbc3yokf.jpg",
      color: "text-orange-500",
    },
    {
      id: 3,
      title: "Feather Prayer",
      image:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1712596948/un21p5amgim7vbc3yokf.jpg",
      color: "text-orange-500",
    },
    {
      id: 4,
      title: "Invitation Cards",
      image:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1712596948/un21p5amgim7vbc3yokf.jpg",
      color: "text-orange-500",
    },
    {
      id: 5,
      title: "Deepsurut medlila",
      image:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1712596948/un21p5amgim7vbc3yokf.jpg",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/4">
            <h1 className="text-3xl font-bold mb-8">Our History</h1>

            <div className="mb-8">
              <img
                src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg"
                alt="Banner flags"
                className="w-full rounded-lg"
              />
            </div>

            <p className="mb-8 text-gray-300">
              Welcome to &quot;Viva Printing Pack&quot;, your trusted partner
              for high-quality, custom printing solutions. We specialize in
              supporting businesses and individuals with a wide range of
              printing services, from packaging and promotional materials to
              customized products that make your brand stand out.
            </p>

            <p className="mb-8 text-gray-300">
              Our Mission At Viva Printing Pack, we are committed to delivering
              exceptional quality and service. Our mission is simple: to provide
              innovative and reliable printing solutions that help our clients
              create lasting impressions. Whether you&apos;re looking to elevate
              your brand, enhance your packaging, or promote your business,
              we&apos;re here to bring your ideas to life.
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">What We Do</h2>
              <p className="text-gray-300">
                We offer a diverse range of printing services, including: -
                &quot;Custom Packaging&quot;- High-quality packaging solutions
                that are designed to showcase your brand and protect your
                products. - &quot;Business Stationery&quot;- From business cards
                to letterheads, we create professional materials that enhance
                your company&apos;s image. - &quot;Marketing Materials&quot;-
                Flyers, brochures, posters, and banners designed to effectively
                promote your products and services. - &quot;Custom
                Products&quot;- Unique promotional items that help increase
                brand visibility, including t-shirts, bags, and more. Our team
                of experts works closely with you to ensure your vision is
                brought to life with precision and care. We pride ourselves on
                attention to detail, fast turnaround times, and competitive
                pricing.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="space-y-4 text-gray-300">
                <li>
                  -Quality You Can Trust: We use the latest printing technology
                  and the highest quality materials to ensure each product meets
                  our rigorous standards.
                </li>
                <li>
                  -Personalized Service: At Viva Printing Pack, we treat each
                  project with the attention it deserves. Our team is always
                  ready to assist you in finding the right solution to meet your
                  needs.
                </li>
                <li>
                  -Fast Turnaround: We understand the importance of deadlines,
                  and we work efficiently to get your prints to you on time,
                  every time.
                </li>
                <li>
                  -Eco-Friendly Practices: we committed to sustainability. Our
                  eco-friendly printing options help reduce your environmental
                  footprint while still delivering top-notch results.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-gray-300">
                Let&apos;s Work Together At Viva Printing Pack, we believe in
                the power of print to transform ideas into tangible results.
                Whether you&apos;re starting a new project or looking to enhance
                your brand presence, we&apos;re here to help every step of the
                way. Ready to bring your vision to life?
              </p>
            </div>

            <p className="text-gray-300">
              Contact us today and let&apos;s get started on your next printing
              project.
            </p>
          </div>

          {/*sidebar */}
          <div className="lg:w-1/4 mt-6">
            <div className="space-y-6">
              {sidebarItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`pb-4 ${
                    index !== sidebarItems.length - 1
                      ? "border-b border-gray-700"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-28 rounded"
                    />
                    <div>
                      <h3 className={item.color}>{item.title}</h3>
                      {item.subtitle && (
                        <div className="text-sm text-gray-400">
                          <p>{item.subtitle}</p>
                          <p>{item.subtext}</p>
                          <p>{item.subtext2}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
