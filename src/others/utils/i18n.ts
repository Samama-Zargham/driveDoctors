import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources: any = {
    en: {
        translation: {
            "Input Field is empty": "Input Field is empty",
            'Please write correct phone number': 'Please write correct phone number',
            'Dr. Yaser Qurban': 'Dr. Yaser Qurban',
            'Phone number not registered': 'Phone number not registered',
            'Otp code send successfully': 'Otp code send successfully',
            'Sign In': 'Sign In',
            'Please write phone number in correct format': 'Please write phone number in correct format',
            'Phone Number': 'Phone Number',
            "Don't have an account? Sign Up": "Don't have an account? Sign Up",
            'Please enter all fields': 'Please enter all fields',
            'Register': 'Register',
            'Already have a account? Sign In': 'Already have a account? Sign In',
            'Full Name': 'Full Name',
            'Password': 'Password',
            'Successfully logged In': 'Successfully logged In',
            'Please enter correct OTP': 'Please enter correct OTP',
            'Invalid OTP': 'Invalid OTP',
            "Code Verification": "Code Verification",
            "Submit": "Submit",
            "Resend confirmation code?": "Resend confirmation code?",
            " seconds left": " seconds left",
            'Hi, ': 'Hi, ',
            "Car care at\nat your doorstep": "Car care at\nat your doorstep",
            'Our Services': 'Our Services',
            'Add New Car': 'Add New Car',
            'Select Car': 'Select Car',
            'Number': 'Number',
            'Service:': 'Service:',
            'Status:': 'Status:',
            'ServiceId': 'ServiceId',
            'Bookings': 'Bookings',
            'time': "time",
            "date": "date",
            "status": "status",
            "serviceId": "serviceId",
            "payment": "payment",
            'services': 'services',
            'No data found': 'No data found',
            'Notifications': 'Notifications',
            'Car Info: ': 'Car Info: ',
            'Number Plate: ': 'Number Plate: ',
            'Clear All': 'Clear All',
            'Name field should not be empty': 'Name field should not be empty',
            'Name should not be greater than 25 characters': 'Name should not be greater than 25 characters',
            "Password does'nt match": "Password does'nt match",
            'Profile': 'Profile',
            'Name': 'Name',
            'Phone': 'Phone',
            'Confirm Password': 'Confirm Password',
            'New Password': 'New Password',
            'Confirm New Password': 'Confirm New Password',
            'Save': 'Save',
            'Delete Account': 'Delete Account',
            'Are you sure you want to delete account?': 'Are you sure you want to delete account?',
            "car not found": "car not found",
            'Cancel': 'Cancel',
            'Select': 'Select',
            'Listed Cars': 'Listed Cars',
            'Continue': 'Continue',
            'Add Sub Services': 'Add Sub Services',
            'People also add this service': 'People also add this service',
            'Reset': 'Reset',
            'Describe the issue you are facing...': 'Describe the issue you are facing...',
            'Add Car Details': 'Add Car Details',
            'Car Make': 'Car Make',
            'ex: ABDC 1234': 'ex: ABDC 1234',
            'Car Modal': 'Car Modal',
            'Car Number Plate': 'Car Number Plate',
            'Pick Up': 'Pick Up',
            'Select Time Slot': 'Select Time Slot',
            'Confirm': 'Confirm',
            'Date and Time': 'Date and Time',
            'Pick From Location': 'Pick From Location',
            'Drop to Work Shop': 'Drop to Work Shop',
            'Select Date': 'Select Date',
            'Select Time': 'Select Time',
            'Price': 'Price',
            'Our clinic waiting for your car': 'Our clinic waiting for your car',
            'Thanks For Your Booking': 'Thanks For Your Booking',
            'Back to Home': 'Back to Home',
            "Home ": "Home ",
            "Contact Us": "Contact Us",
            "Privacy Policy": "Privacy Policy",
            "Disclaimer": "Disclaimer",
            "Home": "Home",
            'Menu': 'Menu',
            "Logout": "Logout",
            'Developed by Selida Interactive': 'Developed by Selida Interactive',
            'Version ': 'Version ',
            'Are you sure you want to Sign Out?': 'Are you sure you want to Sign Out?',
            'Sign Out': 'Sign Out',
            "Language": "Language",
            "Rate Us": "Rate Us",
            'Please insert correct WhatsApp number': 'Please insert correct WhatsApp number',
            'Make sure Whatsapp installed on your device': 'Make sure Whatsapp installed on your device',
            'Write a note...': 'Write a note...',
            'Note': 'Note',
            'Submit Note': 'Submit Note',
            'or': 'or',
            'Phone Call': 'Phone Call',
            'Contact on WhatsApp': 'Contact on WhatsApp'
        }
    },
    ar: {
        translation: {
            "changeLngBtn": "تغيير اللغة",
            'Find Doctors': 'الأطباء',
            'Dr. Yaser Qurban': 'د. ياسر يعقوب',
            'General Medicine': 'طب عام',
            '3 Reviews': ' 3 تقييمات',
            'Iraq': 'العراق',
            'WorkPlace': 'مكان العمل',
            'Yarmuk Hospital Baghdad iraq': 'مستشفى اليرموك بغداد, العراق',
            'Location': 'المنطقة',
            'Al Mansour Baghdad, Iraq': `المنصور بغداد`,
            'Patients': 'المرضى',
            'Online Consultation': 'استشارات أونلاين',
            'Home Consultation': 'استشارات منزلية',
            'Book Now': 'احجز الأن'
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({

        compatibilityJSON: 'v3',
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;