import "./journeySlider.css";

function Card({ image, text }) {
  return (
    <section
      className="journey-card"
      style={{
        background: `url(${image})`,
      }}
    >
      <div className="overlay"></div>
      <p className="card-content">{text}</p>
    </section>
  );
}

export default function JourneySlider() {
  return (
    <section className="journey-slider">
      <Card
        text="We empower clients through customized E-Learning modules, covering sustainable practices and carbon reduction strategies."
        image="/Images/Journey/journey1.png"
      />
      <Card
        text="Our carbon accounting dashboard provides real-time tracking and reporting for Enterprise, MSMEs, and Retail/Individuals, enabling accurate measurement and valuable insights."
        image="/Images/Journey/journey2.png"
      />
      <Card
        text="Our approach to Certified Emission Reductions (CERs) emphasizes transparency and efficiency, streamlining project registration, conducting rigorous audits, and promptly issuing impact-validating certificates."
        image="/Images/Journey/journey3.png"
      />
      <Card
        text="Our marketplace promotes carbon credit trading, fosters community development, and actively supports carbon neutrality."
        image="/Images/Journey/journey4.png"
      />
    </section>
  );
}
