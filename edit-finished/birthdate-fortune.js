function generateFortune() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);//parseInt() ใช้เพื่อแปลงค่าจาก input ที่เป็น string ให้เป็นตัวเลข (integer)

    const fortuneTitle = document.getElementById('fortune-title');
    const fortuneDescription = document.getElementById('fortune-description');//ฟังก์ชันจะดึงค่าจากฟอร์ม HTML ที่มีช่องสำหรับกรอกวัน (day), เดือน (month) และปี (year) โดยใช้ document.getElementById() เพื่อเข้าถึงค่าที่กรอกเข้ามา:
    const fortuneResult = document.getElementById('fortune-result');

    if (!day || !month || !year) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน"); //หากผู้ใช้ไม่ได้กรอกข้อมูลในช่องใดช่องหนึ่ง จะมีการแจ้งเตือน (alert) ให้ผู้ใช้กรอกข้อมูลให้ครบ:
        return;//จากค่าเศษ (fortuneValue ที่ได้จากการหาร) โค้ดจะใช้คำสั่ง switch เพื่อเลือกดวงชะตาที่เหมาะสมจาก 5 แบบที่ต่างกัน โดยแต่ละดวงจะมี title (หัวข้อดวง) และ description (คำอธิบายดวง):
    }


    const fortuneValue = (day + month + year) % 5;//จากนั้นโค้ดจะคำนวณค่าโชคชะตาโดยนำค่าวัน, เดือน, และปีมาบวกกัน แล้วนำผลลัพธ์ไปหารด้วย 5 เพื่อหาค่าเศษ (modulo 5):

    let fortune;

    switch (fortuneValue) {
        case 0:
            fortune = {
                title: "ดวงแข็งแรงและมั่นคง",
                description: "ชีวิตของคุณมีความแข็งแกร่งและพร้อมรับมือกับความท้าทายต่างๆ ได้ดี"
            };
            break;
        case 1:
            fortune = {
                title: "ดวงด้านความรัก",
                description: "คุณมีโชคด้านความรัก ความสัมพันธ์ของคุณจะราบรื่นและมีความสุข"
            };
            break;
        case 2:
            fortune = {
                title: "ดวงด้านการงาน",
                description: "การงานของคุณจะเจริญก้าวหน้า มีโอกาสได้รับโปรโมชันหรือการยอมรับในที่ทำงาน"
            };
            break;
        case 3:
            fortune = {
                title: "ดวงด้านการเงิน",
                description: "การเงินของคุณมีแนวโน้มจะดีขึ้น มีโชคลาภทางการเงินเข้ามา"
            };
            break;
        case 4:
            fortune = {
                title: "ดวงด้านสุขภาพ",
                description: "สุขภาพของคุณแข็งแรง ควรรักษาสุขภาพให้ดีเพื่อความสุขในชีวิต"
            };
            break;
        default:
            fortune = {
                title: "ดวงกลาง ๆ",
                description: "ดวงของคุณไม่มีอะไรโดดเด่นมากนัก ชีวิตอยู่ในช่วงเวลาที่สมดุล"
            };
            break;
    }


    fortuneTitle.textContent = fortune.title;
    fortuneDescription.textContent = fortune.description;//เมื่อเลือกดวงชะตาที่ตรงกับค่าเศษ (fortuneValue) ได้แล้ว โค้ดจะนำผลลัพธ์ไปแสดงใน HTML โดยปรับข้อความใน fortuneTitle และ fortuneDescription พร้อมกับแสดง fortuneResult (ซึ่งอาจเป็นส่วนของหน้าเว็บที่ซ่อนอยู่):
    fortuneResult.style.display = "block";
}
