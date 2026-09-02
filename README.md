ข้อที่ 1 — ฟังก์ชันคำนวณคะแนน (ex1-functions.js)
ใช้อะไร: Arrow Functions, Default Parameters (full = 60, weight = 20), และ Array Methods (.find())
อธิบาย: สร้างฟังก์ชันย่อยสำหรับตรวจสอบความถูกต้องของคะแนน ตัดเกรด คำนวณคะแนนเก็บตามสัดส่วน และคิดคะแนนรวม เพื่อฝึกการแยกหน้าที่ของฟังก์ชันและการกำหนดค่าเริ่มต้น (Default Parameter) เมื่อไม่มีการส่งอาร์กิวเมนต์เข้ามา

ข้อที่ 2 — ทะเบียนนักศึกษา (ex2-collection.js)
ใช้อะไร: Array of Objects, .find(), .filter(), .some(), Spread Operator (...), Optional Chaining (?.) และ Nullish Coalescing (??)
อธิบาย: จัดการค้นหาและเพิ่มข้อมูลในโครงสร้าง Array ของ Object โดยเน้นหลักการที่ไม่แก้ไข Array ต้นฉบับ (Immutability) และใช้เครื่องมือยุคใหม่ป้องกันโปรแกรมพัง (Error) ในกรณีค้นหาข้อมูลไม่พบหรือข้อมูลบาง field ขาดหายไป

ข้อที่ 3 — สรุปผลการเรียน (ex3-transform.js)
ใช้อะไร: Functional Programming Methods (.map(), .filter(), .reduce()) และ Method Chaining
อธิบาย: ดึง เปลี่ยนรูปแบบ และคำนวณค่าสถิติจากชุดข้อมูล (เช่น หาคะแนนเฉลี่ย, นับจำนวนเกรด, หา Top Student) โดยไม่ใช้ลูป for หรือ while รวมทั้งเน้นการเขียนท่อข้อมูลแบบต่อกันในบรรทัดเดียว (Method Chaining) และรองรับกรณีชุดข้อมูลว่าง ([]) เพื่อไม่ให้เกิด NaN หรือ Error