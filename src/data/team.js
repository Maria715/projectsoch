const volunteers = [
  {
    id: 1,
    name: "Maria Akhtar",
    role: "Founder & CEO",
    image: `${process.env.PUBLIC_URL}/images/team/maria.png`,
    tagline: "Maria believes every child deserves a chance to learn and grow   her vision drives Project Soch to light the path of education and hope.",
    message: "“Education is not charity; it’s dignity. Every child deserves that chance.”"
  },
  {
    id: 2,
    name: "Muhammad Saqib",
    role: "Co-Founder & Head of Technology",
    image: `${process.env.PUBLIC_URL}/images/team/Muhammad Saqib – Head of Technology.png`,
tagline: "Saqib uses innovation as a force for good - building digital bridges that connect underprivileged kids to education and opportunity.",
message: '"Technology becomes meaningful when it uplifts lives and empowers the forgotten."'
  },
  {
    id: 3,
    name: "Muhammad Arslan Bosan",
    role: "Co-Founder & Head of Ops",
    image: `${process.env.PUBLIC_URL}/images/team/arslan.png`,
    tagline: "Arslan believes true change starts with action   leading operations that turn compassion into real educational impact.",
    message: "“Change begins when we act   and education is the most powerful act of all.”"
  },
  {
    id: 18,
    name: "Sayyam Sabir",
    role: "Product Owner",
    image: `${process.env.PUBLIC_URL}/images/team/Sayam Sabir - Product Owner.jpg`,
    tagline: "Sayyam aligns technology with purpose   guiding Soch’s vision to make education accessible, inclusive, and life-changing.",
    message: "“Education is freedom   and we build the paths that lead to it.”"
  },
  {
    id: 9,
    name: "Fariha Ahson",
    role: "Spokesperson",
    image: `${process.env.PUBLIC_URL}/images/team/Fariha Ahson.jpg`,
    tagline: "Fariha speaks for change   representing Soch’s belief that education is the most powerful equalizer in society.",
    message: "“Words can inspire, but education transforms   that’s the voice we raise.”"
  },
  {
    id: 7,
    name: "Ayesha Iqbal",
    role: "Front-end",
    image: `${process.env.PUBLIC_URL}/images/team/Ayesha Iqbal.jpeg`,
    tagline: "Ayesha builds with purpose   using technology to open doors of learning for children who need it most.",
    message: "“Knowledge should never depend on privilege   it should reach every street.”"
  },

  {
    id: 16,
    name: "Muhammad Hussain",
    role: "Graphic Designer",
    image: `${process.env.PUBLIC_URL}/images/team/Muhammad Hussain - Graphic Designer.jpeg`,
    tagline: "Hussain transforms vision into visuals   creating designs that reflect Soch’s purpose of empowering lives through education.",
    message: "“Art is the language of empathy   and we use it to teach the world.”"
  },
  {
    id: 15,
    name: "Muhammad Hasnain",
    role: "Outreach & Cases Verification Team",
    image: `${process.env.PUBLIC_URL}/images/team/Muhammad Hasnain_.jpg`,
    tagline: "Hasnain ensures transparency and trust   verifying every story to make sure help reaches the right hands.",
    message: "“True impact begins when honesty guides every helping hand.”"
  },
  {
    id: 12,
    name: "Hamna Zahid",
    role: "Front-end",
    image: `${process.env.PUBLIC_URL}/images/team/Hamna Zahid - Frontend Developer.jpg`,
    tagline: "Hamna believes design can drive social change   crafting digital spaces that make learning inspiring and inclusive.",
    message: "“Beauty in design is purpose in disguise   and ours is to educate.”"
  },
  {
    id: 13,
    name: "Hamza Ahmed",
    role: "Front-end",
    image: `${process.env.PUBLIC_URL}/images/team/hamza.png`,
    tagline: "Hamza codes with purpose   helping Soch build platforms that deliver education to those who need it most.",
    message: "“The future belongs to those we choose to uplift today.”"
  },

 
  {
    id: 8,
    name: "Ayesha Shahzaib",
    role: "Social Media",
    image: `${process.env.PUBLIC_URL}/images/team/Ayesha Shahzaib_.jpg`,
    tagline: "Ayesha gives voice to Soch’s mission   spreading positivity, inclusion, and hope through impactful social media stories.",
    message: "“Empathy shared online can become change felt on the ground.”"
  },
 
  {
    id: 10,
    name: "Fozia Bibi",
    role: "Social Media Team",
    image: `${process.env.PUBLIC_URL}/images/team/fozia bibi Social Media.jpeg`,
    tagline: "Fozia uses creativity to raise awareness, shaping conversations that highlight the importance of education and equality.",
    message: "“Every click and post can become a step toward someone’s brighter future.”"
  },
  {
    id: 11,
    name: "Ghulam Muhammad Khan",
    role: "Front-end",
    image: `${process.env.PUBLIC_URL}/images/team/Ghulam Muhammad Khan.png`,
    tagline: "Ghulam turns ideas into interactive realities   building digital tools that help educate and empower marginalized kids.",
    message: "“When code serves compassion, technology becomes a tool for humanity.”"
  },
  {
    id: 21,
    name: "Syeda Komal Rizvi",
    role: "Social Media Team",
    image: `${process.env.PUBLIC_URL}/images/team/komal.jpeg`,
    tagline: "Komal amplifies voices that matter   connecting cultures and communities to support Soch’s mission of inclusive education.",
    message: "“When voices unite for a purpose, barriers fall   and learning begins.”"
  },
  {
    id: 42,
    name: "Uzair Zia Qureshi",
    role: "Mobile App Developer - Germany Chapter",
    image: `${process.env.PUBLIC_URL}/images/team/uzair.jpeg`,
    tagline: "Uzair amplifies voices that matter   connecting cultures and communities to support Soch’s mission of inclusive education.",
    message: "“When voices unite for a purpose, barriers fall   and learning begins.”"
  },
  {
    id: 41,
    name: "Muhammad Ayoub Madni",
    role: "Outreach & Cases Verification Team",
    image: `${process.env.PUBLIC_URL}/images/team/ayub.jpg`,
    tagline: "Ayoub amplifies voices that matter   connecting cultures and communities to support Soch’s mission of inclusive education.",
    message: "“When voices unite for a purpose, barriers fall   and learning begins.”"
  },
 
  {
    id: 4,
    name: "Ahmed Masood",
    role: "Communication Manager - Germany Chapter",
    image: `${process.env.PUBLIC_URL}/images/team/Ahmed Masood.jpeg`,
    tagline: "Ahmed amplifies voices that matter   connecting cultures and communities to support Soch’s mission of inclusive education.",
    message: "“When voices unite for a purpose, barriers fall   and learning begins.”"
  },
  {
    id: 14,
    name: "Muhammad Ghayoor Ali",
    role: "Full Stack Developer",
    image: `${process.env.PUBLIC_URL}/images/team/Muhammad Ghayoor Ali- Full Stack Developer.jpg`,
    tagline: "Ghayoor believes in building systems that serve humanity   empowering Soch’s mission through strong, scalable technology.",
    message: "“Real innovation begins where compassion meets code.”"
  },
 
  {
    id: 17,
    name: "Nasir Zaman",
    role: "Backend Developer",
    image: `${process.env.PUBLIC_URL}/images/team/Nasir Zaman - Backend Lead.jpg`,
    tagline: "Nasir powers the digital backbone of Soch   ensuring that every child’s learning journey runs smoothly and securely.",
    message: "“Behind every system we build, there’s a dream we protect   the dream to learn.”"
  },
  {
    id: 6,
    name: "Amina Arshad",
    role: "Front-end",
    image: `${process.env.PUBLIC_URL}/images/team/Amina Arshad.jpg`,
    tagline: "Amina designs experiences that reflect Soch’s heart   making digital learning simple, beautiful, and accessible for every child.",
    message: "“When design meets purpose, learning becomes a doorway to hope.”"
  },
  {
    id: 5,
    name: "Ameema Waheed",
    role: "Social Media Team",
    image: `${process.env.PUBLIC_URL}/images/team/Ameema.jpeg`,
    tagline: "Ameema spreads awareness and empathy through creative storytelling, inspiring others to believe in education for all.",
    message: "“A single story can spark a movement; ours begins with compassion and learning.”"
  },
  

];

export default volunteers;
