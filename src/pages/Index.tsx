import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [rotatedButtons, setRotatedButtons] = useState<Set<number>>(new Set());

  const handleButtonClick = (index: number) => {
    setRotatedButtons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  const chakras = [
    {
      name: "Муладхара",
      subtitle: "Корневая чакра",
      color: "chakra-root",
      emoji: "🔴",
      description: "Основа, заземление, безопасность",
      class: "Класс 1: Укоренение и стабильность"
    },
    {
      name: "Свадхистана",
      subtitle: "Сакральная чакра",
      color: "chakra-sacral",
      emoji: "🟠",
      description: "Творчество, эмоции, удовольствие",
      class: "Класс 2: Раскрытие творческого потока"
    },
    {
      name: "Манипура",
      subtitle: "Солнечное сплетение",
      color: "chakra-solar",
      emoji: "🟡",
      description: "Сила воли, уверенность, действие",
      class: "Класс 3: Сила и трансформация"
    },
    {
      name: "Анахата",
      subtitle: "Сердечная чакра",
      color: "chakra-heart",
      emoji: "💚",
      description: "Любовь, сострадание, гармония",
      class: "Класс 4: Открытие сердца"
    },
    {
      name: "Вишудха",
      subtitle: "Горловая чакра",
      color: "chakra-throat",
      emoji: "🔵",
      description: "Самовыражение, истина, общение",
      class: "Класс 5: Голос истины"
    },
    {
      name: "Аджна",
      subtitle: "Третий глаз",
      color: "chakra-third",
      emoji: "🟣",
      description: "Интуиция, ясность, видение",
      class: "Класс 6: Внутреннее зрение"
    },
    {
      name: "Сахасрара",
      subtitle: "Коронная чакра",
      color: "chakra-crown",
      emoji: "💜",
      description: "Духовность, связь, просветление",
      class: "Класс 7: Единство с высшим"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "После курса ОПОРА я почувствовала невероятную лёгкость и гармонию. Каждая чакра раскрылась, как цветок.",
      rating: 5
    },
    {
      name: "Мария Соколова",
      text: "Глубокая практика, которая действительно работает. Рекомендую всем, кто ищет трансформацию.",
      rating: 5
    },
    {
      name: "Елена Волкова",
      text: "Юля — потрясающий преподаватель! Её энергия и знания помогли мне открыть новые грани себя.",
      rating: 5
    }
  ];

  const prices = [
    {
      name: "Базовый",
      price: "9 900 ₽",
      features: [
        "7 записанных классов",
        "Доступ на 3 месяца",
        "Методические материалы",
        "Поддержка в чате"
      ]
    },
    {
      name: "Премиум",
      price: "19 900 ₽",
      features: [
        "7 классов + бонусные медитации",
        "Безлимитный доступ",
        "Личная консультация",
        "Сертификат о прохождении",
        "Доступ к закрытому сообществу"
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "39 900 ₽",
      features: [
        "Всё из Премиум",
        "3 индивидуальных занятия",
        "Персональный план практики",
        "Круглосуточная поддержка",
        "Доступ ко всем будущим курсам"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-heading font-bold gradient-chakra bg-clip-text text-transparent">
            ОПОРА
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">О курсе</a>
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#teacher" className="hover:text-primary transition-colors">Преподаватель</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Стоимость</a>
          </div>
          <Button className="gradient-chakra text-white border-0">
            Записаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-chakra opacity-10"></div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 text-shadow-glow">
            ОПОРА
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-muted-foreground">
            Курс Кундалини Йоги
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            7 классов для раскрытия всех энергетических центров.<br />
            Путешествие через чакры к гармонии и силе.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gradient-chakra text-white text-lg px-8 py-6 border-0">
              Начать трансформацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Узнать подробнее
            </Button>
          </div>
          <img 
            src="https://cdn.poehali.dev/files/6bee434e-5859-4352-88f0-e26a9d1ab49a.jpg"
            alt="Энергия чакр"
            className="max-w-3xl mx-auto rounded-3xl shadow-2xl animate-float"
          />
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-8 animate-fade-in">
            О курсе ОПОРА
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
            <p>
              <strong>ОПОРА</strong> — это уникальный курс Кундалини Йоги, созданный для глубокой работы 
              с энергетической системой человека. За 7 классов вы пройдёте путь от корневой чакры 
              до коронной, раскрывая потенциал каждого энергетического центра.
            </p>
            <p>Каждый класс — это полноценная практика продолжительностью 40-60 минут, включающая крии, медитации, дыхательные техники и релаксацию. Вы научитесь чувствовать энергию, управлять ею и использовать для трансформации жизни.</p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="animate-fade-in">
                <CardContent className="pt-6 text-center">
                  <Icon name="Heart" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="font-heading text-xl font-bold mb-2">Для всех уровней</h3>
                  <p className="text-muted-foreground">
                    Подходит как новичкам, так и опытным практикам
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6 text-center">
                  <Icon name="Sparkles" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="font-heading text-xl font-bold mb-2">Глубокая трансформация</h3>
                  <p className="text-muted-foreground">
                    Работа на физическом, энергетическом и духовном уровнях
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="pt-6 text-center">
                  <Icon name="Award" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="font-heading text-xl font-bold mb-2">Проверено временем</h3>
                  <p className="text-muted-foreground">
                    Древние техники адаптированные для современного человека
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
            Программа курса
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            7 классов • 7 чакр • Ваша трансформация
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {chakras.map((chakra, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 border-l-4 animate-fade-in`}
                style={{ 
                  borderLeftColor: `var(--${chakra.color})`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="text-6xl animate-glow">{chakra.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-heading font-bold mb-2">
                      {chakra.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{chakra.subtitle}</p>
                    <p className="text-lg mb-2">{chakra.description}</p>
                    <p className="text-primary font-semibold">{chakra.class}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className={`transition-all duration-500 ${
                      rotatedButtons.has(index) ? 'rotate-180' : 'rotate-0'
                    }`}
                    onClick={() => handleButtonClick(index)}
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teacher" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-16 animate-fade-in">
            Ваш проводник
          </h2>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <img 
                src="https://cdn.poehali.dev/projects/c7c71912-ec78-4b6e-afee-c7ba2fa39b47/files/fa6d531b-be67-4672-b3c8-3f98c87c89ca.jpg"
                alt="Преподаватель"
                className="rounded-3xl shadow-2xl w-full animate-fade-in"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-4xl font-heading font-bold">Юлия Светлова</h3>
              <p className="text-xl text-primary">
                Сертифицированный преподаватель Кундалини Йоги
              </p>
              <div className="space-y-3 text-lg">
                <p>
                  <Icon name="Check" className="inline mr-2 text-primary" size={20} />
                  12 лет практики Кундалини Йоги
                </p>
                <p>
                  <Icon name="Check" className="inline mr-2 text-primary" size={20} />
                  Обучение в Международной школе KRI
                </p>
                <p>
                  <Icon name="Check" className="inline mr-2 text-primary" size={20} />
                  Более 500 учеников по всему миру
                </p>
                <p>
                  <Icon name="Check" className="inline mr-2 text-primary" size={20} />
                  Специализация: работа с чакрами и энергетикой
                </p>
              </div>
              <p className="text-muted-foreground pt-4">
                "Моя миссия — помочь каждому человеку найти свою опору через практику 
                и открыть безграничный потенциал внутренней энергии. Кундалини Йога 
                изменила мою жизнь, и я знаю, что она может изменить и вашу."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-16 animate-fade-in">
            Отзывы учеников
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
            Выберите свой формат
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            Инвестиция в себя — лучшее решение
          </p>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <Card 
                key={index} 
                className={`relative animate-fade-in hover:shadow-2xl transition-all ${
                  price.popular ? 'border-primary border-2 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gradient-chakra text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-heading font-bold text-center mb-4">{price.name}</h3>
                  <p className="text-5xl font-heading font-bold text-center mb-6 text-primary">
                    {price.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" className="mr-2 text-primary flex-shrink-0 mt-1" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${price.popular ? 'gradient-chakra text-white border-0' : ''}`}
                    size="lg"
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 gradient-chakra text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-heading font-bold mb-8 animate-fade-in">
            Готовы начать?
          </h2>
          <p className="text-2xl mb-12 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>
          <div className="max-w-md mx-auto flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="px-6 py-4 rounded-lg text-foreground"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="px-6 py-4 rounded-lg text-foreground"
            />
            <input 
              type="tel" 
              placeholder="Телефон" 
              className="px-6 py-4 rounded-lg text-foreground"
            />
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg py-6">
              Отправить заявку
            </Button>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="Instagram" size={32} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="Facebook" size={32} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="Youtube" size={32} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="container mx-auto text-center">
          <p className="font-heading text-xl mb-2">ОПОРА</p>
          <p className="text-sm">© 2024 Курс Кундалини Йоги. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}