/*
Home-Finder
Copyright (C) 2013-2018

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

var streetArr = ["אביגדור המאירי", "אביגיל", "אביה השופט", "אבישג", "אבן גבירול", "אבן עזרא", "אברהם אבינו", "אברהם השופט", "אברמסון שרגא", "אברנאל", "אבשלום", "אהרונסון", "אוסוולדו ארניה", "אוסישקין", "אוסקר שינדלר", "אופירה", "אחד העם", "אילה", "אילת", "אינשטיין", "אלון יוסף", "אליהו הנביא", "אליעזר בן יאיר", "אליעזר בן יהודה", "אליעזר שמואלי", "אלפסי", "אלתרמן", "אסתר", "ארז", "ארלוזורוב", "ארליך שמחה", "אשבל מיכאל", "אשר ברש", "בודנהיימר", "בורוכוב", "בורלא", "בזל", "ביאליק", "בירנפלד", "בית-אל", "בית-שאן", "בית לחם", "בלפור", "בני אור", "בסקין", "בעלי התוספות", "בצלאל", "בר ניסן", "ברנר", "גולומב", "גורדון", "גוש עציון", "גיורא יוספטל", "גלבוע", "גלילי ישראל", "גלעד", "גמל", "גרוסמן מאיר", "גרשון שופמן", "גת", "דב ברנע", "דב יוסף", "דוד אלעזר", "דוד המלך", "דוד וולפסון", "דולצ'ין אריה", "דורי יעקב", "דיין משה", "דרך השלום", "האנדרטה", "סמטת הבשור", "ההסתדרות", "הורקנוס יוחנן", "יוחנן הורקנוס", "הזז חיים", "החיד\"א", "החלוץ", "הכותל המערבי", "הכנסת", "הל\"ה", "הלפרין", "המלכים", "המעפילים", "דרך המשחררים", "המשחררים", "הנדיב", "הנוטר", "הנשיאים שד'", "הס", "הצבי", "הרב טנא", "הרב קוק", "הרב שמחה אסף", "הרצוג", "הרצל", "השומר", "השלה", "התלמוד", "וולפסון", "וילנאי זאב",
 "וינגייט", "ויצמן",
  "ורבורג", "זאב ז'בוטינסקי", "יוהנה ז'בוטינסקי", "ז'בוטינסקי", "זהרי מיכאל", "זלמן ארן", "חוגלה", "חומה ומגדל", "חזני מיכאל", "חטיבה שמונה", "חיים בר לב", "חיים גבריהו", "חן", "חנה סנש", "חפר משעול", "חתם סופר", "טבנקין", "טבריה", "טיומקין", "יבין יהושע", "יבנה רחבה", "יגאל אלון שד'", "יגאל ידין שד'", "יד ושם", "יהודה הלוי", "יואל השופט", "יוחנן", "יוסף בן מתתיהו", "יוסף תקוע", "ימית", "יעלים שד'", "יעקב אבינו", "יערי מאיר", "יצחק אבינו", "יצחק רגר", "יציאת אירופה", "ירושלים שד'", "יריחו", "ישראל ישעיהו", "כחול לבן", "כצנלסון", "לאה אמנו", "לואי פיקרד", "לויצקי", "לכיש", "מאיר גולדה", "מאפו אברהם", "מבצע אסף", "מבצע ארז", "מבצע יואב", "מבצע נחשון", "מבצע עובדה", "מגידו", "מונטיפיורי", "מוריה", "מיכל", "מימון הרב", "מינץ", "ממשית", "מנדלי", "מסקין אהרון", "דרך מצדה", "מצדה", "מצקין אברון", "מקלף מרדכי", "מרבד הקסמים", "מרים", "מרקוס", "משה קהירי", "משה שרת", "משעול מוצא", "משעול סוסיא", "נגבה", "ניב דוד", "נמיר", "נתן ילין מור", "סוקולוב", "סטרומה", "סיני", "סמטת יהונתן", "יהונתן", "סמטת קדש", "סנהדרין", "סקולסקי שלמה", "סרן דב", "סתוי משה", "עגנון", "עובדת",
  "עוזיאל הרב", "עולי הגרדום", "עופרים",
   "עין גדי", "עליה", "עמוס ירקוני", "עמיצור שמעון", "פטריה", "פיירברג", "פנינת סיוון", "פרו' אמיר אברהם", "פריבס משה", "פרישמן דוד", "צונדק", "ציזלינג אהרון", "ציפורי", "צפת רחבה", "קדושי בגדד", "קדיש סילמן", "קדם", "קויפמן", "קילשין", "קלאוזנר", "קלישר", "קלמן פורת", "קלצקין רפאל", "קפריסין", "קרן היסוד", "רבי טרפון", "רבי עקיבא", "עקיבא", "רבישג", "רד\"ק", "רוברטו", "רוזנבלום הרצל", "רוטנברג", "רונאל דב", "רופין", "רוקח ישראל", "רחבת אמציה", "רחבת הגלבוע", "רחבת הרא\"ש", "רחבת מולדת", "רחבת שלומציון", "רחל אמנו", "רחל המשוררת", "רייך חביבה", "רינגנבלום", "רמב\"ם", "רש\"י", "שאול המלך", "שאר ישוב", "שבטה", "שד' הערים התאומות", "שולמית", "שופראן גרשון", "שז\"ר שד'", "שחל", "שחל יצחק", "שטרית", "שכם", "שלונסקי", "שלמה המלך", "שמעון בר יוחאי", "שמעוני", "שמשון", "שער הגיא", "שפירא", "שפרינצק", "שריג נחום", "תל-חי", "בן יהודה", "זיסו", "חביבה רייק", "רינגלבלום", "יואל השופט", "תל חי", "שרעבי", "בן מתתיהו", "השלום", "בן מתיתיהו", "ירמיהו", "הקלישר", "הכוזרי", "משעול ביתר", "בן גוריון", "שמעון בר גיורא", "בר גיורא", "עוזיה המלך", "יצחק שיפר", "ברנפלד", "מטודלה", "כרמלי", "רגר", "אסף שמחה", "עוזיהו המלך", "שמחה אסף", "אלפרד רוסי", "חז\"ל", "לייב יפה", "משעול מודיעין", "אלעזר בן יאיר", "רנה קסן", "חיים הזז", "כיכר קפלן", "פרויד", "טשרניחובסקי", "יטבתה", "משעול יודפת", "קדש", "אלכסנדר ינאי", "משעול בית\"ר", "בני-אור", "דובנוב", "שניאור", "אסירי ציון", "אוסבלדו ארניה", "ויינגייט", "משעול נבטים", "יוטבתה", "שלושת בני עין חרוד", "גבעתי", "בן-יהודה", "יצחק מודעי", "יוספטל", "איינשטיין", "הקנאים", "סוסו הכהן", "המכתשים", "רזיאל", "סוכות", "יעקב כהן", "הורקנוס", "שטרוק", "יוסף בן דוד", "קרייתי", "מנדלסון", "כיכר הקניזי", "מיכאל חזני", "שדרות יעלים", "גולני"];

var neighborhoodArr = ["העיר העתיקה", "שכונת דרום", "המרכז האזרחי", "מלרוזים", "שכונה א", "שכונה ב", "שכונה ג", "שכונה ד", "שכונה ה", "שכונה ו", "שכונה ט", "שכונה י\"א", "נאות לון", "נווה זאב", "נווה נוי", "נחל בקע", "נחל עשן", "רמות", "נווה מנחם"];

var cityName = encodeURIComponent("באר שבע");
var cityName_en = encodeURIComponent("Beer Sheva");

var workDest = encodeURIComponent("אוניברסיטת בן גוריון, באר שבע");

/*

switch (js_type)
{
	case 'apartments':
	default:
		var groupIds = ["1422040104674708", "301573709936327", "239734636143988", "151292078248577", "232218806803833", "147637378748874", "493733584036609", "138595033004411", "279135451973", "205317886171313", "196524600428443", "170744879507", "142572615816414", "130592653688128", "207290626061815"]; //562920413746648, 107589119317392, 148530961957416
		break;
	case 'stuff':
		var groupIds = ["204495279594116", "100634906774928", "418805924854888", "102135599901160"];
		break;
}
*/
