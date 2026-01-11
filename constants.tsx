
import { FlashCode, Step } from './types';

export const FLASH_CODES: FlashCode[] = [
  { code: 12, description: "ระบบปกติ (Normal)", symptoms: "ไม่มีอาการผิดปกติ ไฟเครื่องยนต์ไม่ค้าง", solution: "ตรวจสอบระบบทั่วไปตามระยะเวลา" },
  { code: 14, description: "เซนเซอร์เพลาลูกเบี้ยว (Camshaft)", symptoms: "สัญญาณขาดหายหรือผิดปกติ (P0340)", solution: "เช็คปลั๊กเซ็นเซอร์หน้าเครื่อง หรือเปลี่ยนเซ็นเซอร์ใหม่" },
  { code: 15, description: "เซนเซอร์เพลาข้อเหวี่ยง (Crankshaft)", symptoms: "สัญญาณขาดหายหรือเซนเซอร์เสีย (P0335)", solution: "ตรวจสอบสายไฟเซ็นเซอร์บริเวณท้ายเครื่องหรือข้างเสื้อสูบ" },
  { code: 21, description: "เซนเซอร์อุณหภูมิน้ำมันเชื้อเพลิง", symptoms: "วงจรทำงานผิดปกติ (P0180)", solution: "ตรวจสอบปลั๊กบริเวณปั๊มคอมมอนเรล" },
  { code: 22, description: "เซนเซอร์อุณหภูมิอากาศ (IAT)", symptoms: "แรงดันไฟฟ้าต่ำหรือสูงเกินไป (P0112/P0113)", solution: "ทำความสะอาดเซนเซอร์แอร์โฟล์" },
  { code: 23, description: "เซนเซอร์อุณหภูมิน้ำหล่อเย็น (ECT)", symptoms: "วงจรทำงานผิดปกติ (P0117/P0118)", solution: "เช็คระดับน้ำและปลั๊กเซ็นเซอร์หลังเครื่อง" },
  { code: 24, description: "เซนเซอร์ความเร็วรถ (VSS)", symptoms: "สัญญาณความเร็วขาดหาย (P0500)", solution: "เช็คเฟืองไมล์หรือเซ็นเซอร์ท้ายเกียร์" },
  { code: 25, description: "เซนเซอร์ความเร็ว (รุ่น ABS)", symptoms: "ปัญหาที่ระบบความเร็วล้อ (P0500)", solution: "เช็คสายเซ็นเซอร์ ABS ทุกล้อ" },
  { code: 31, description: "เซนเซอร์ตำแหน่งขาคันเร่ง (APP)", symptoms: "วงจรเซนเซอร์คันเร่งผิดปกติ", solution: "เช็คปลั๊กคันเร่งไฟฟ้า" },
  { code: 32, description: "เซนเซอร์แรงดันบูสต์ (Turbo Boost)", symptoms: "วงจรเซนเซอร์แรงดันเทอร์โบผิดปกติ (P0237/P0238)", solution: "เช็คสายลมเทอร์โบ หรือตัว VNT Control" },
  { code: 34, description: "วงจรหัวฉีด (Injectors)", symptoms: "สายไฟหัวฉีดขาดหรือช็อต (P1261/P1262)", solution: "ตรวจสอบปลั๊กหัวฉีดและสายไฟเมน" },
  { code: 35, description: "แรงดันไฟฟ้าระบบสูง", symptoms: "แรงดันไฟชาร์จสูงเกินไป (P0563)", solution: "เช็คคัทเอาท์ไดชาร์จ" },
  { code: 41, description: "รีเลย์หลัก (Main Relay)", symptoms: "ปัญหาที่วงจรจ่ายไฟกล่อง ECM", solution: "สลับรีเลย์ในกล่องฟิวส์หน้าเครื่อง" },
  { code: 42, description: "แรงดันเทอร์โบสูงเกิน (Overboost)", symptoms: "บูสต์เกิน (P0234)", solution: "เช็คเวสเกตหรือตัวแปรผันเทอร์โบ" },
  { code: 43, description: "ระบบควบคุม SCV Valve", symptoms: "วาล์วควบคุมแรงดันน้ำมันผิดปกติ", solution: "ล้างหรือเปลี่ยน SCV Valve" },
  { code: 44, description: "เซนเซอร์เพลาลูกเบี้ยว", symptoms: "สัญญาณผิดจังหวะ", solution: "ตรวจสอบมาร์คโซ่ราวลิ้น" },
  { code: 45, description: "ระบบ EGR", symptoms: "มอเตอร์หรือวาล์ว EGR ทำงานผิดปกติ (P1404)", solution: "ล้างคราบเขม่าในวาล์ว EGR" },
  { code: 52, description: "รีเลย์ ECM", symptoms: "วงจรควบคุมรีเลย์หลักทำงานผิดปกติ (P0215)", solution: "เช็คสายไฟกราวกล่อง" },
  { code: 53, description: "ปั๊มจ่ายน้ำมัน (Supply Pump)", symptoms: "ปัญหาที่ตัวปั๊มหรือการจ่ายน้ำมัน (P0251)", solution: "เช็คแรงดันน้ำมันเชื้อเพลิง" },
  { code: 54, description: "ระบบควบคุมจังหวะการฉีด", symptoms: "จังหวะการฉีดน้ำมันผิดปกติ (P0216)", solution: "เช็คระบบไฟฟ้าปั๊ม" },
  { code: 55, description: "วงจรแรงดันอ้างอิง 1 (5V)", symptoms: "ไฟเลี้ยงเซนเซอร์ 5V ชุดที่ 1 ผิดปกติ (P0641)", solution: "เช็คสายไฟเซ็นเซอร์ลัดวงจร" },
  { code: 56, description: "วงจรแรงดันอ้างอิง 2 (5V)", symptoms: "ไฟเลี้ยงเซนเซอร์ 5V ชุดที่ 2 ผิดปกติ (P0651)", solution: "เช็คสายไฟเซ็นเซอร์ลัดวงจร" },
  { code: 57, description: "วงจรแรงดันอ้างอิง 3 (5V)", symptoms: "ไฟเลี้ยงเซนเซอร์ 5V ชุดที่ 3 ผิดปกติ (P0697)", solution: "เช็คสายไฟเซ็นเซอร์ลัดวงจร" },
  { code: 61, description: "ลิ้นปีกผีเสื้อไฟฟ้า", symptoms: "การทำงานของมอเตอร์ลิ้นปีกผีเสื้อผิดปกติ (P0638)", solution: "ล้างคราบน้ำมันในลิ้นปีกผีเสื้อ" },
  { code: 64, description: "ระบบควบคุมเทอร์โบ (VGS)", symptoms: "ปัญหาที่ตัวควบคุมครีบแปรผัน (P0243)", solution: "เช็คมอเตอร์ VGS" },
  { code: 65, description: "แรงดันเทอร์โบต่ำ", symptoms: "บูสต์ไม่มาตามสั่ง (P0299/P0243)", solution: "เช็คท่ออินเตอร์รั่ว" },
  { code: 66, description: "หัวเผา (Glow Plug)", symptoms: "วงจรควบคุมหัวเผาผิดปกติ (P0380/P0381)", solution: "เช็คหัวเผาและรีเลย์หัวเผา" },
  { code: 71, description: "เซนเซอร์ความดันบรรยากาศ", symptoms: "วงจรเซนเซอร์ในกล่อง ECM ผิดปกติ (P0107/P0108)", solution: "ตรวจสอบกล่อง ECM" },
  { code: 77, description: "ไฟเช็คเครื่องยนต์", symptoms: "วงจรหลอดไฟหน้าปัดผิดปกติ (P0650)", solution: "เช็คหลอดไฟและลายปริ้นท์หน้าปัด" },
  { code: 91, description: "เซนเซอร์ Air Flow (MAF)", symptoms: "สัญญาณอากาศเข้าผิดปกติ (P0102/P0103)", solution: "ล้างเซ็นเซอร์แอร์โฟล์" },
  { code: 118, description: "แรงดันในรางหัวฉีดสูงเกินไป", symptoms: "Common Rail Pressure too high (P0088)", solution: "เช็ค SCV Valve หรือเซ็นเซอร์ราง" },
  { code: 151, description: "ประสิทธิภาพตัวควบคุมแรงดันน้ำมัน", symptoms: "Fuel Regulator Performance (P0089)", solution: "เช็คกรองโซล่าและปั๊ม" },
  { code: 155, description: "แรงดันไฟฟ้าระบบทำงานผิดปกติ", symptoms: "System Voltage Malfunction (P0560)", solution: "เช็คขั้วแบตเตอรี่และสายดิน" },
  { code: 177, description: "ระบบ Immobilizer ขาดการติดต่อ", symptoms: "No communication (U0167)", solution: "เช็คกุญแจและกล่อง Immo" },
  { code: 225, description: "แรงดันน้ำมันในรางสูงเกินขีดจำกัด", symptoms: "Rail Pressure Upper Limit (P0087)", solution: "เช็คเซ็นเซอร์แรงดันราง" },
  { code: 227, description: "ตรวจพบการรั่วไหลในระบบน้ำมัน", symptoms: "High Pressure Fuel Leak (P0093/P1093)", solution: "เช็คท่อน้ำมันและหัวฉีด" },
  { code: 245, description: "เซนเซอร์แรงดันในรางหัวฉีด (FRP)", symptoms: "Fuel Rail Pressure Sensor (P0192/P0193)", solution: "เช็คปลั๊กและสายไฟที่รางหัวฉีด" }
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: "เตรียมความพร้อม",
    time: "30s",
    icon: "Power",
    visual: "ดับเครื่องยนต์และปิดกุญแจไปที่ตำแหน่ง OFF",
    audioText: "เริ่มแรกให้ดับเครื่องยนต์และปิดสวิตช์กุญแจให้สนิทก่อนครับ"
  },
  {
    id: 2,
    title: "เสียบสายจัมเปอร์",
    time: "1m",
    icon: "Cable",
    visual: "ใช้สายไฟจัมเปอร์เชื่อมต่อระหว่างขา 4 และขา 6 ของปลั๊ก OBD2",
    audioText: "นำสายไฟมาจัมพ์ที่รูที่ 4 และ 6 ของปลั๊ก OBD ใต้คอนโซลคนขับครับ"
  },
  {
    id: 3,
    title: "เปิดสวิตช์กุญแจ",
    time: "10s",
    icon: "Key",
    visual: "บิดกุญแจไปที่ตำแหน่ง ON (ห้ามสตาร์ทเครื่องยนต์)",
    audioText: "บิดกุญแจไปที่ตำแหน่ง ON ให้ไฟหน้าปัดโชว์ แต่ไม่ต้องสตาร์ทเครื่องนะครับ"
  },
  {
    id: 4,
    title: "สังเกตไฟกระพริบ",
    time: "2m",
    icon: "Eye",
    visual: "จ้องมองที่ไฟรูปเครื่องยนต์ (Check Engine Light) บนหน้าปัด",
    audioText: "คราวนี้สังเกตไฟรูปเครื่องยนต์สีส้มที่หน้าปัด มันจะเริ่มกระพริบเป็นจังหวะครับ"
  },
  {
    id: 5,
    title: "นับจังหวะรหัส",
    time: "3m",
    icon: "Activity",
    visual: "จังหวะช้า = หลักสิบ, จังหวะเร็ว = หลักหน่วย",
    audioText: "ให้นับจังหวะช้าเป็นหลักสิบ และจังหวะเร็วเป็นหลักหน่วย แล้วเอามารวมกันเป็นรหัสครับ"
  }
];
