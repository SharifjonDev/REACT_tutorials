import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      gb: {
        translation: {
          ins: "Instagram",
          vk: "VKontakte",
          tt: "TikTok",
          yt: "YouTube",
          header_title: "Boost e promozione di account su Instagram",
          header_prag:
            " Potenzia la tua popolarità su Instagram con pochi clic, è semplice ed efficace!",
          header_btn: "Promuovi Instagram",
          account: "Personal account",

          account_title: "Welcome back! 👋",
          account_useEmail: "or use email",
          loginInput: "Login or email",
          passwordInput: "Password (8 characters or more)",
          account_remember: "Remember me",
          account_forgetpassword: "Forgot your password?",
          account_sign: "Sign in",
          account_member: "New member? ",
          account_register: "Register",
          account_first_register: "First time on SMMTOUCH?",
          account_first_prag:
            "Create an account and become famous in a couple of hours",
          account_register_btn: "Registration",

          registerloginInput: "Login",
          registeremailInput: "Email",
          registerpasswordInputrepeat: "Repeat password",
          register_remember:
            "I hereby consent to the processing of my personal data",
          register: "Register",
          register_member: "Already have an account?",
          register_first_register: "Already registered?",
          register_first_prag: "Sign in with SmmTouch below",
        },
      },
      ru: {
        translation: {
          ins: "Инстаграм",
          vk: "ВКонтакте",
          tt: "ТикТок",
          yt: "Ютуб",
          header_title: "Накрутка и продвижение аккаунтов Инстаграм",
          header_prag:
            " Повышайте свою популярность в Инстаграм всего в несколько кликов, просто и эффективно!",
          header_btn: "Раскрутить Инстаграм",
          account: "Личный кабинет",
          account_title: "С возвращением 👋",
          account_useEmail: "или используйте Email",
          loginInput: "Логин или электронная почта",
          passwordInput: "Пароль (8 символов и более)",
          account_remember: "Запомнить меня",
          account_forgetpassword: "Забыли пароль?",
          account_sign: "Войти",
          account_member: "Ещё нет аккаунта? ",
          account_register: "Зарегистрироваться",
          account_first_register: "Впервые на SMMTouch?",
          account_first_prag:
            "Создайте аккаунт и станьте популярнее уже через несколько часов",
          account_register_btn: "Регистрация",

          registerloginInput: "Логин",
          registeremailInput: "Электронная почта",
          registerpasswordInputrepeat: "Повторите пароль",
          register_remember: "Я согласен с обработкой моих персональных данных",
          register: "Зарегистрироваться",
          register_member: "Уже есть аккаунт?",
          register_first_register: "Уже зарегистрированы?",
          register_first_prag: "Авторизуйтесь в личном кабинете SMMTouch ниже",
        },
      },
      de: {
        translation: {
          ins: "Instagram",
          vk: "VKontakte",
          tt: "TikTok",
          yt: "YouTube",
          header_title: "Boosten Und Bewerben Von Instagram-konten",
          header_prag:
            " Steigern Sie Ihre Popularität Auf Instagram Mit Nur Wenigen Klicks. Es Ist Einfach Und Effektiv!",
          header_btn: "Bewerben Instagram",
          account: "Persönliches Konto",
          account_title: "Willkommen Zurück! 👋",
          account_useEmail: "oder Verwenden Sie E-mail",
          loginInput: "Login Oder E-mail",
          passwordInput: "Passwort (8 Zeichen oder mehr)",
          account_remember: "Mich Erinnern",
          account_forgetpassword: "Passwort Vergessen?",
          account_sign: "Einloggen",
          account_member: "Neues Mitglied ",
          account_register: "Registrieren",
          account_first_register: "Zum Ersten Mal Auf Smmtouch?",
          account_first_prag:
            "Erstellen Sie Ein Konto Und Werden Sie In Wenigen Stunden Berühmt",
          account_register_btn: "Anmeldung",

          registerloginInput: "Anmeldung",
          registeremailInput: "Email",
          registerpasswordInputrepeat: "Wiederhole Das Passwort",
          register_remember:
            "Hiermit Erkläre Ich Mich Mit Der Verarbeitung Meiner Personenbezogenen Daten Einverstanden",
          register: "Registrieren",
          register_member: "Sie Haben Bereits Ein Konto? ",
          register_first_register: "Bereits Registriert?",
          register_first_prag: "Melden Sie Sich Unten Mit SMMTouch An",
        },
      },
      es: {
        translation: {
          ins: "Instagram",
          vk: "VKontakte",
          tt: "TikTok",
          yt: "YouTube",
          header_title: "Promoción y ascenso cuentas de Instagram",
          header_prag:
            " ¡Aumente su popularidad en Instagram con solo unos pocos clics, simple y efectivamente!",
          header_btn: "Promocionar Instagram",
          account: "Cuenta personal",
          account_title: "¡Bienvenido a! 👋",
          account_useEmail: "o usa el correo electrónico",
          loginInput: "nombre de usuario o correo electrónico",
          passwordInput: "Contraseña (8 caracteres o más)",
          account_remember: "Recuérdame",
          account_forgetpassword: "¿Olvidaste tu contraseña?",
          account_sign: "Entrar",
          account_member: "Nuevo miembro",
          account_register: "Registrarse",
          account_first_register: "¿Primera vez en SMMTOUCH?",
          account_first_prag:
            "Crea una cuenta y hazte famoso en un par de horas",
          account_register_btn: "Registrarse",

          registerloginInput: "Nombre de usuario",
          registeremailInput: "Correo electrónico",
          registerpasswordInputrepeat: "Repite la contraseña",
          register_remember:
            "Por la presente acepto el procesamiento de mis datos personales",
          register: "Registrarse",
          register_member: "¿Ya tienes una cuenta?",
          register_first_register: "¿Ya estás registrado?",
          register_first_prag: "Iniciar sesión con SmmTouch",
        },
      },

      pt: {
        translation: {
          ins: "Instagram",
          vk: "VKontakte",
          tt: "TikTok",
          yt: "YouTube",
          header_title: "Impulsionamento e promoção de contas no Instagram",
          header_prag:
            " Aumente sua popularidade no Instagram com apenas poucos cliques, é simples e efetivo!",
          header_btn: "Promover Instagram",
          account: "Conta pessoal",
          account_title: "Bem-vindo a! 👋",
          account_useEmail: "ou usar e-mail",
          loginInput: "login ou e-mail",
          passwordInput: "Senha (8 caracteres ou mais)",
          account_remember: "Salvar login e senha",
          account_forgetpassword: "Você esqueceu sua senha?",
          account_sign: "Entrar",
          account_member: "Novo membro",
          account_register: "Registrar-se",
          account_first_register: "Primeira vez em SMMTOUCH?",
          account_first_prag:
            "Crie uma conta e torne-se famoso em algumas horas",
          account_register_btn: "Registro",

          registerloginInput: "Login",
          registeremailInput: "E-mail",
          registerpasswordInputrepeat: "Repita a senha",
          register_remember:
            "Eu concordo com o processamento dos meus dados pessoais",
          register: "Registrar-se",
          register_member: "Você já tem uma conta?",
          register_first_register: "Você já se registrou?",
          register_first_prag: "Faça login com SmmTouch abaixo",
        },
      },

      it: {
        translation: {
          ins: "Instagram",
          vk: "VKontakte",
          tt: "TikTok",
          yt: "YouTube",
          header_title: "Boost e promozione di account su Instagram",
          header_prag:
            " Potenzia la tua popolarità su Instagram con pochi clic, è semplice ed efficace!",
          header_btn: "Promuovi Instagram",
          account: "Account personale",
          account_title: "Ben tornato! 👋",
          account_useEmail: "o utilizza la posta elettronica",
          loginInput: "Login o Email",
          passwordInput: "Password (8 caratteri o più)",
          account_remember: "Ricordami",
          account_forgetpassword: "Hai dimenticato la password?",
          account_sign: "Accedi",
          account_member: "Nuovo membro? ",
          account_register: "Registrati",
          account_first_register: "Prima volta su SMMTouch?",
          account_first_prag:
            "Crea un account e diventa famoso in un paio d'ore",
          account_register_btn: "Registrazione",

          registerloginInput: "Login",
          registeremailInput: "Email",
          registerpasswordInputrepeat: "Ripeti la password",
          register_remember:
            "Acconsento al trattamento dei miei dati personali",
          register: "Registrati",
          register_member: "Hai già un account?",
          register_first_register: "Già registrato?",
          register_first_prag: "Accedi con SMMTouch qui sotto",
        },
      },
      tr: {
        translation: {
          ins: "Instagram",
          vk: "VKontakte",
          tt: "TikTok",
          yt: "YouTube",
          header_title: "İnstagram hesapları gelişimi ve promosyonu",
          header_prag:
            " Sadece birkaç tıklama ile, basit ve etkili şekilde Instagram'daki popülerliğinizi artırın!",
          header_btn: "Instagram gelişimi",
          account: "Kişisel hesap",
          account_title: "Tekrar hoşgeldiniz 👋",
          account_useEmail: "veya e-mail üzerinden kullanın",
          loginInput: "Login veya e-mail",
          passwordInput: "Şifre (8 karakter veya daha fazla)",
          account_remember: "Beni hatırla",
          account_forgetpassword: "Şifrenizi mi unuttunuz?",
          account_sign: "Giriş",
          account_member: "Hesabım yok",
          account_register: "Kayıt ol",
          account_first_register: "SMMTOUCH'a ilk defa mı girdiniz?",
          account_first_prag: "Kayıt ol ve bir kaç saat sonra ünlü ol",
          account_register_btn: "Kayıt ol",

          registerloginInput: "Login",
          registeremailInput: "E-mail",
          registerpasswordInputrepeat: "Şifreyi yeniden girin",
          register_remember: "Kişisel verilerin işlenmesine izin veriyorum",
          register: "Kayıt ol",
          register_member: "Hesabınız var mı?",
          register_first_register: "Kayıt oldunuz mu?",
          register_first_prag: "Aşağıda kişisel hesabınıza giriş yapın",
        },
      },
    },
    lng: "gb",
    supportedLngs: ["gb", "tr", "de", "es", "it", "ru", "pt"],
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },

    interpolation: {
      escapeValue: false,
    },
  });
