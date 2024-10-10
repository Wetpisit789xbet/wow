function generateRandomCard() {
    const cardTitle = document.getElementById('card-title');
    const cardImage = document.getElementById('card-image');
    const cardDescription = document.getElementById('card-description');


    const cards = [
        {
            name: 'The Fool',
            image: 'images/The_Fool.png',
            description: "หมายถึง การเริ่มต้นใหม่ เส้นทางใหม่ๆ หรือสิ่งใหม่ๆ ที่วางแผนไว้สามารถเริ่มต้นได้ ดำเนินได้แต่จะมีความเสี่ยงร่วมด้วย หรืออาจหมายถึงไพ่ที่เกี่ยวข้องกับความเสี่ยงเลยก็ได้"
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


        // เพิ่มการ์ดและรูปภาพอื่น ๆ ได้ที่นี่
    ];

    const randomIndex = Math.floor(Math.random() * cards.length);//สุ่ม0-ทั่งหมด
    const randomCard = cards[randomIndex];

    cardTitle.textContent = randomCard.name;//แสดงชื่อ
    cardImage.src = randomCard.image;//อัพที่อยู่ภาพ
    cardDescription.textContent = randomCard.description;
}
