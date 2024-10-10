document.addEventListener('DOMContentLoaded', () => { //ฟังก์ชัน document.addEventListener('DOMContentLoaded', () => { ... }); จะทำงานเมื่อหน้าเว็บโหลดเสร็จเรียบร้อย เพื่อให้แน่ใจว่าทุกองค์ประกอบใน HTML ได้ถูกสร้างขึ้นแล้วก่อนที่จะเริ่มการทำงานของโค้ดนี้
    const aboutGrid = document.querySelector('.about-grid');//โค้ดนี้เริ่มจากการเข้าถึง aboutGrid ซึ่งเป็นส่วนที่จะแสดงการ์ดทั้งหมด โดยใช้ document.querySelector() เพื่อค้นหา HTML องค์ประกอบที่มีคลาส .about-grid:

    const aboutData = [
        // ข้อมูลการ์ดของคุณ (เหมือนที่คุณมี) ข้อมูลของไพ่แต่ละใบถูกจัดเก็บไว้ในรูปแบบของอาร์เรย์ aboutData ซึ่งประกอบด้วยหลายๆ อ็อบเจ็กต์ แต่ละอ็อบเจ็กต์ประกอบไปด้วย 3 คุณสมบัติ คือ name (ชื่อไพ่), image (ที่อยู่ของรูปภาพ), และ description (คำอธิบายความหมายของไพ่):
        {
            name: 'The Fool',
            image: 'images/The_Fool.png',
            description: "หมายถึง การเริ่มต้นใหม่"//การทำงานหลักของโค้ดอยู่ในส่วนที่ใช้ forEach() เพื่อวนลูปผ่านข้อมูลการ์ดไพ่ใน aboutData แต่ละอ็อบเจ็กต์จะถูกนำมาใช้เพื่อสร้างการ์ดไพ่:
        },
        {
            name: 'The Magician',
            image: 'images/The_Magician.png',
            description: "หมายถึง การเริ่มต้นลงมือทำและการต่อยอด สามารถทำได้ทุกอย่างที่ต้องการ วางแผนอะไรก็สามารถเริ่มได้เลย หรือบางครั้งไพ่ The Magician ก็หมายถึงด้านความรักได้เช่นกัน เป็นความนิยมมาก"
        },
        {
            name: 'The High Priestess',
            image: 'images/The_High_Priestess.png',
            description: "ไพ่ The High Priestess มีความหมายถึง ไพ่ที่บ่งเกี่ยวกับความเก่ง ความสามารถสูง ความเฉลียวฉลาด"
        },
        {
            name: 'The Empress ',
            image: 'images/The_Empress.png',
            description: "หมายถึง ความอุดมสมบูรณ์ทุกอย่าง ความมั่งมี ความเฟื่องฟู ไม่ว่าจะเป็นด้านใดก็ตาม ทั้งทรัพย์สิน เงินทอง ความมั่งคั่งทั้งหมด"
        },
        {
            name: 'The Emperor ',
            image: 'images/The_Emperor_1_1.png',
            description: "ไพ่ The Empress มี ความหมายถึงอำนาจ การมีอำนาจ การตกอยู่ภายใต้ผู้ที่มีอำนาจมากกว่า ความกดดัน หรือทางทรัพย์สินจะหมายถึงความมั่งคั่ง"
        },
        {
            name: 'The Hierophant ',
            image: 'images/The_Hierophant_1_1.png',
            description: "หมายถึง การเป็นที่พึ่งพาของผู้อื่น การต้องรับผิดชอบเกี่ยวกับเรื่องของผู้อื่น การเป็นผู้นำ"
        },
        {
            name: 'The Lovers  ',
            image: 'images/The_Lovers_1.png',
            description: "หมายถึง ความรักที่ดี หรือการมีเรื่องที่ต้องตัดสินใจเข้ามา "
        },
        {
            name: 'The Chariot  ',
            image: 'images/The_Chariot.png',
            description: "หมายถึง ความมุ่งมั่นในการจัดการ หรือการทำสิ่งใดๆ ก็ตาม หากเดินหน้าต่อไปก็จะสำเร็จได้ตามที่ต้องการ"
        },
        {
            name: ' Strength  ',
            image: 'images/Strength.png',
            description: "หมายถึง การจัดการปัญหา อุปสรรค และการใช้ชีวิตที่เก่งมาก แสดงถึงคนที่เข้มแข็ง สามารถจัดการทุกอย่างได้ดี"
        },
        {
            name: 'The Hermit  ',
            image: 'images/The_Hermit.png',
            description: "หมายถึง ความต้องการเวลาในการทบทวนตัวเอง และต้องการชีวิตที่ส่วนตัวมากขึ้นในการจัดการสิ่งต่างๆ "
        },
        {
            name: 'The Wheel pf Fortune  ',
            image: 'images/The_Wheel_of_Fortune.png',
            description: "หมายถึง ความต้องการเวลาในการทบทวนตัวเอง และต้องการชีวิตที่ส่วนตัวมากขึ้นในการจัดการสิ่งต่างๆ "
        },
        {
            name: 'Justice   ',
            image: 'images/Justice.png',
            description: "หมายถึง มีโอกาสได้เจอเรื่องที่ต้องเกี่ยวข้องกับด้านกฎหมาย หรือจะได้รับการตัดสินบางอย่างที่ยุติธรรมและเป็นผลดีกับตัวเอง"
        },
        {
            name: 'The Hanged Man  ',
            image: 'images/The_Hanged_Man.png',
            description: "หมายถึง สิ่งที่กำลังคิดอยู่ คาดหวังอยู่ ต้องมีการรอคอยไปก่อน ห้ามใจร้อน แล้วผลลัพธ์จะสมปรารถนาแน่นอน"
        },
        {
            name: 'Death  ',
            image: 'images/Death.png',
            description: "หมายถึง มีการเปลี่ยนแปลงพลิกผันจากเรื่องที่ร้าย ชีวิตที่แย่มากๆ ด้านต่างๆ จะพลิกฟื้นกลับมาดีอีกครั้ง"
        },
        {
            name: 'Temperance ',
            image: 'images/Temperance.png',
            description: "หมายถึง ปัญหาที่เกิดขึ้นต้องมีการประนีประนอมจากตัวเราเอง แล้วผลลัพธ์จะดีมากกว่า หรืออาจต้องมีการเจรจาเพื่อต่อรองอย่างเหมาะสมเพื่อการแก้ไขปัญหาอย่างราบรื่น"
        },
        {
            name: 'The Devil  ',
            image: 'images/The_Devil.png',
            description: "หมายถึง การถูกผูกมัด ถูกบงการบังคับชีวิต ไม่มีอิสระ และสุขภาพจิตใจค่อนข้างไปทางแย่"
        },
        {
            name: 'The Tower  ',
            image: 'images/The Tower.jpg',
            description: "หมายถึง จะมีเรื่องที่เปลี่ยนแปลงเกิดขึ้นอย่างกะทันหัน หรือจะมีเรื่องที่เป็นปัญหาทะเลาะเบาะแว้งกับคนใกล้ตัวเข้ามา เป็นช่วงเวลาวุ่นวายพอสมควร"
        },
        {
            name: 'The Star   ',
            image: 'images/The_Star.png',
            description: "หมายถึง อะไรที่ต้องการให้สำเร็จ ต้องใจเย็นแล้วดำเนินการต่อไป โดยรวมแล้วไม่มีปัญหาอะไร ราบรื่นสงบดี"
        },
        {
            name: 'The Moon  ',
            image: 'images/The Moon.png',
            description: "หมายถึง ปัญหาและการหลอกลวงกำลังจะเข้ามา ต้องเตรียมตัวรับมือเร็วๆ นี้"
        },
        {
            name: 'The Sun  ',
            image: 'images/The Sun.png',
            description: "หมายถึง กำลังจะมีเรื่องดี ๆ เข้ามา หรืออะไรที่เคยทำไว้กำลังจะสำเร็จ เตรียมรับข่าวดี"
        },
        {
            name: 'Judgement  ',
            image: 'images/Judgement.png',
            description: "หมายถึง โอกาสที่เข้ามา โอกาสที่ได้รับ และการสูญเสียโอกาส สามารถเกิดขึ้นได้ทั้งหมดจากการตัดสินใจของเราแค่ครั้งเดียว"
        },
        {
            name: 'The World  ',
            image: 'images/The_World_.png',
            description: "หมายถึง ความสำเร็จ ความราบรื่น ทุกอย่างที่ต้องการจะประสบความสำเร็จได้ตามมที่หวังแน่นอน"
        },




        // การ์ดอื่น ๆ ...
    ];

    aboutData.forEach(item => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('about-card');

        // เพิ่มชื่อการ์ด
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = item.name; // ใช้ item.name แทน item.title

        // เพิ่มรูปภาพ
        const cardImage = document.createElement('img');
        cardImage.src = item.image; // กำหนด src รูปภาพ
        cardImage.alt = item.name; // เพิ่ม alt text เพื่อการเข้าถึง

        // เพิ่มคำบรรยาย
        const cardDescription = document.createElement('p');
        cardDescription.textContent = item.description;

        // รวมทั้งหมดเข้าด้วยกัน
        cardElement.appendChild(cardImage);
        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardDescription);

        aboutGrid.appendChild(cardElement);
    });
});
