// ---------------------------ADMIN TYPE-----------------------------//

exports.TYPE_CUSTOM_FIELD = {
    INPUT: "Input",
    TEXTAREA: "TextArea",
    INPUT_NUMBER: "InputNumber"
}

exports.TYPE_PRODUCT = {
    PHONE: "phone",
    LAPTOP: "laptop",
    DRIVE: "drive",
    MOUSE: "mouse",
    KEYBOARD: "keyboard",
    HEADPHONES: "headphones"
}

// ---------------------------ADMIN RENDER-----------------------------//
exports.LIST_RENDER_DEFAULT = []
//--LAP--
exports.TYPE_PRODUCT_RENDER = [
    { id: 1, value: "Điện thoại" },
    { id: 2, value: "Laptop" },
    { id: 3, value: "Ổ Cứng" },
    { id: 4, value: "Chuột" },
    { id: 2, value: "Bàn phím" },
    { id: 6, value: "Tay nghe" }
]

exports.BRAND_LAPTOP = [
    { id: 1, value: "MACBOOK" },
    { id: 2, value: "LEVONO" },
    { id: 3, value: "DELL" },
    { id: 4, value: "ASUS" },
    { id: 2, value: "HP" },
    { id: 6, value: "LG" },
    { id: 7, value: "MSI" }
]
exports.SPEC_VALUE_LAPTOP_CPU = [
    { id: 1, value: "Intel Pentium, N6000, 1.10 GHz" },
    { id: 2, value: "Intel Core i3-10110U" },
    { id: 3, value: "Intel Core i3 Ice Lake, 1005G1, 1.20 GHz" },
    { id: 4, value: "Intel Core i3 Coffee Lake, 8145U, 2.10 GHz" },
    { id: 2, value: "Intel Core i3 Tiger Lake, 1115G4, 3.00 GHz" },
    { id: 6, value: "Intel Core i5 Tiger Lake, 1135G7, 2.40 GHz" },
    { id: 7, value: "Intel Core i5 Ice Lake, 1035G1, 1.00 GHz" },
    { id: 8, value: "Intel Core i5 Ice Lake, 1035G4, 1.10 GHz" },
    {
        id: 9,
        value: "Intel Core i5-7200U 2.2 GHz - 3.1 GHz 3MB 2 nhân, 4 luồng "
    },
    {
        id: 10,
        value: "Intel Core i5-8250U 1.6 GHz - 3.4 GHz 6MB 4 nhân 8 luồng )"
    },
    { id: 11, value: "Intel Core i5 Coffee Lake, 8265U, 1.60 GHz" },
    { id: 12, value: "Intel Core i5 Coffee Lake, 9300H, 2.40 GHz" },
    { id: 13, value: "Intel Core i5 Comet Lake, 10300H, 2.50 GHz" },
    { id: 14, value: "Intel Core i5-10200H" },
    { id: 15, value: "Intel Core i5 Comet Lake, 10210U, 1.60 GHz" },
    { id: 16, value: "Intel Core i7-1065G7" },
    { id: 17, value: "Intel Core i7-10750H" },
    { id: 18, value: "Intel Core i7-10875H" },
    { id: 19, value: "Intel Core i7-10510U" },
    { id: 20, value: "Intel Core i7 Comet Lake, 10710U, 1.10 GHz" },
    { id: 21, value: "Intel Core i7 Coffee Lake, 8565U, 1.80 GHz" },
    { id: 22, value: "Intel Core i7 Comet Lake, 10870H, 2.20 GHz" },
    { id: 23, value: "Intel Core i7 Comet Lake, 10750H, 2.60 GHz" },
    { id: 24, value: "Intel Core i7 Tiger Lake, 1165G7, 2.80 GHz" },
    { id: 25, value: "Intel Celeron, N4020, 1.10 GHz" },
    { id: 26, value: "AMD Ryzen 2, 5500U, 2.10 GHz" },
    { id: 27, value: "AMD Ryzen 3, 3250U, 2.60 GHz" },
    { id: 28, value: "AMD Ryzen 2, 4600H, 3.00 GHz" }
]
exports.SPEC_VALUE_LAPTOP_GPU = [
    { id: 1, value: "Card đồ họa tích hợp, Intel UHD Graphics" },
    { id: 2, value: "Card đồ họa rời, NVIDIA GeForce GTX1650 4GB" },
    { id: 3, value: "Card đồ họa rời, NVIDIA GeForce MX250 2GB" },
    { id: 4, value: "Card đồ họa rời, NVIDIA GeForce RTX2060" },
    { id: 2, value: "Card đồ họa tích hợp, Intel Iris Xe Graphics" },
    { id: 6, value: "Card đồ họa tích hợp, Intel HD Graphics 620" },
    { id: 7, value: "Card đồ họa tích hợp, Intel Iris Plus Graphics" },
    { id: 8, value: "Card đồ họa rời, NVIDIA GeForce GTX 1650Ti 4GB" },
    { id: 9, value: "Card đồ họa tích hợp, Intel UHD Graphics 600" },
    { id: 10, value: "Card đồ họa tích hợp, AMD Radeon Graphics" },
    { id: 11, value: "Card đồ họa rời, NVIDIA GeForce GTX 1660Ti Max-Q, 6GB" },
    { id: 12, value: "NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel UHD Graphics" },
    { id: 13, value: "NVIDIA GeForce RTX 2060 6GB GDDR6 / Intel UHD Graphics" },
    {
        id: 14,
        value: "NVIDIA GeForce RTX 2070 Super 8GB GDDR6 / Intel UHD Graphics"
    }
]
exports.SPEC_VALUE_LAPTOP_RAM = [
    { id: 1, value: "2 GB, DDR3L, 1600 MHz" },
    { id: 2, value: "4 GB, DDR3L, 1600 MHz" },
    { id: 3, value: "8 GB, DDR3L, 1600 MHz" },
    { id: 4, value: "4 GB, DDR4, 2133 MHz" },
    { id: 2, value: "4 GB, DDR4, 2400 MHz" },
    { id: 6, value: "4 GB, DDR4, 2666 MHz" },
    { id: 7, value: "4 GB, DDR4, 2933 MHz" },
    { id: 8, value: "4 GB, DDR4, 3200 MHz" },
    { id: 9, value: "4 GB, DDR4, 4266 MHz" },
    { id: 10, value: "8 GB, DDR4, 2133 MHz" },
    { id: 11, value: "8 GB, DDR4, 2400 MHz" },
    { id: 12, value: "8 GB, DDR4, 2666 MHz" },
    { id: 13, value: "8 GB, DDR4, 2933 MHz" },
    { id: 14, value: "8 GB, DDR4, 3200 MHz" },
    { id: 15, value: "8 GB, DDR4, 3200 MHz" },
    { id: 16, value: "16 GB, DDR4, 2400 MHz" },
    { id: 17, value: "16 GB, DDR4, 3200 MHz" },
    { id: 18, value: "16 GB, DDR4, 3600 MHz" },
    { id: 19, value: "32 GB, DDR4, 2666 MHz" },
    { id: 20, value: "4 GB, LPDDR4X, 4266 MHz" },
    { id: 21, value: "8 GB, LPDDR4X, 3200 MHz" },
    { id: 22, value: "8 GB, LPDDR4X, 4266 MHz" },
    { id: 23, value: "8 GB, LPDDR4X, 4267 MHz" },
    { id: 24, value: "16 GB, LPDDR4X, 4266 MHz" },
    { id: 25, value: "16 GB, LPDDR4X, 4267 MHz" }
]

exports.SPEC_VALUE_LAPTOP_MAXRAM = [
    { id: 1, value: "Không hỗ trợ nâng cấp" },
    { id: 2, value: "8GB" },
    { id: 2, value: "16GB" },
    { id: 2, value: "32GB" },
    { id: 2, value: "64GB" }
]
exports.SPEC_VALUE_LAPTOP_ROM = [
    { id: 1, value: "1TB SSD M.2 PCIe" },
    { id: 2, value: "512GB SSD M.2 NVMe" },
    { id: 3, value: "512GB SSD M.2 SATA" },
    { id: 4, value: "HDD: 500 GB SATA3, Hỗ trợ khe cắm SSD M.2 PCIe" },
    { id: 2, value: "SSD 256GB NVMe PCIe" },
    { id: 6, value: "256GB SSD M.2 NVMe" },
    { id: 7, value: "256GB SSD M.2 SATA" },
    { id: 8, value: "SSD 512GB NVMe PCIe" },
    { id: 9, value: "SSD 256GB NVMe PCIe, Hỗ trợ khe cắm SSD M.2 PCIe" },
    { id: 10, value: "SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA" },
    { id: 11, value: "SSD 512GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA" },
    { id: 12, value: "SSD 512GB NVMe PCIe, Hỗ trợ khe cắm SSD M.2 PCIe" },
    {
        id: 13,
        value:
            "Hỗ trợ khe cắm HDD SATA, SSD 512GB NVMe PCIe, Hỗ trợ khe cắm SSD M.2 PCIe"
    },
    { id: 14, value: "SSD: 512 GB, M.2 PCIe" },
    { id: 15, value: "SSD: 512 GB, M.2 PCIe, Hỗ trợ khe cắm SSD M.2 PCIe" },
    { id: 16, value: "Intel Optane 32GB (H10), SSD 512 GB M.2 PCIe" },
    { id: 17, value: "Không hỗ trợ khe cắm HDD, SSD 512GB NVMe PCIe" },
    { id: 18, value: "Hỗ trợ thêm 2 khe cắm SSD M.2 PCIe, SSD 512GB NVMe PCI" }
]
exports.SPEC_VALUE_LAPTOP_SCREEN = [
    { id: 1, value: "13 inch, WQHD (2160 x 1350)" },
    { id: 2, value: "13.3 inch, Full HD (1920 x 1080)" },
    { id: 3, value: "13.3 IPS ( 1920 x 1080 ) , không cảm ứng" },
    { id: 4, value: "13.3 inch, QHD (2560x1600)" },
    { id: 2, value: "13.4 inch, Full HD+ (1920 x 1200)" },
    { id: 6, value: "13.4 inch, 4K/UHD (3840 x 2400)" },
    { id: 7, value: "14 inch, HD 720 (1280 x 720)" },
    { id: 8, value: "14 inch, HD (1366 x 768)" },
    { id: 9, value: "14 IPS (1920 x 1080)" },
    { id: 10, value: "14 inch, Full HD (1920 x 1080)" },
    { id: 11, value: "15.6 inch, Full HD (1920 x 1080)" },
    { id: 12, value: "15.6 inch, HD (1366 x 768)" },
    { id: 13, value: "15.6 inch, Full HD (1920 x 1080), 144Hz" },
    { id: 14, value: "15 IPS (1920 x 1080)" },
    { id: 15, value: "15.6 IPS (1920 x 1080), 144Hz" },
    { id: 16, value: "15.6 IPS (1920 x 1080), 144Hz" },
    { id: 17, value: "15.6 IPS ( 1920 x 1080 ) , không cảm ứng" },
    { id: 18, value: "17 inch, WQXGA (2560 x 1600)" },
    { id: 19, value: "17 IPS (2560 x 1600)" }
]
exports.SPEC_VALUE_LAPTOP_PORT = [
    { id: 1, value: "Thunderbolt 3, 2 x USB 3.1, HDMI" },
    { id: 2, value: "Thunderbolt 3, 3 x USB 3.1, HDMI" },
    { id: 3, value: "Thunderbolt 3, USB 3.1, HDMI, USB 2.0" },
    {
        id: 4,
        value:
            "hunderbolt 3, 1 x USB 3.2, 2 x USB 2.0, HDMI, LAN (RJ45), Mini DisplayPort"
    },
    { id: 2, value: "Thunderbolt 4 USB-C, 2 x USB 3.1" },
    { id: 6, value: "Thunderbolt 4 USB-C, 2x SuperSpeed USB A" },
    { id: 7, value: "1 x USB 3.2, 2 x Thunderbolt4 USB-C, HDMI" },
    { id: 8, value: "1 x USB 3.2, 2 x USB 2.0, HDMI, USB Type-C" },
    { id: 9, value: "1 x USB 3.2, Thunderbolt4 USB-C, 2 x USB 2.0, HDMI" },
    { id: 10, value: "2 x Thunderbolt 4 USB-C" },
    { id: 11, value: "2 x Thunderbolt 4 USB-C, USB Type-C" },
    { id: 12, value: "2 x Thunderbolt4 USB-C, 1 x USB 3.2, HDMI" },
    { id: 13, value: "2 x SuperSpeed USB A, 2 x Thunderbolt 3 (USB-C)" },
    {
        id: 14,
        value: "2 x USB Type-C (Power Delivery and DisplayPort), USB Type-C"
    },
    { id: 15, value: "2 x USB 2.0, USB 3.1, HDMI, LAN (RJ45)" },
    { id: 16, value: "2 x USB 3.0, HDMI, USB 2.0" },
    { id: 17, value: "2 x USB 3.0, HDMI, USB 2.0, USB Type-C" },
    { id: 18, value: "2 x USB 3.0, HDMI, LAN (RJ45), USB Type-C" },
    { id: 19, value: "2 x USB 3.1, USB Type-C" },
    { id: 20, value: "2 x USB 3.1, HDMI, USB Type-C" },
    { id: 21, value: "2 x USB 3.1, HDMI, LAN (RJ45), USB 2.0" },
    { id: 22, value: "2 x USB 3.1, HDMI, LAN (RJ45), USB 2.0, USB Type-C" },
    { id: 23, value: "2 x USB 3.1, HDMI, 2 x Thunderbolt 3 (USB-C)" },
    { id: 24, value: "2 x USB 3.2, HDMI, USB Type-C" },
    { id: 25, value: "2 x USB 3.2, HDMI, LAN (RJ45), USB 2.0" },
    { id: 26, value: "2 x USB 3.2, HDMI, LAN (RJ45), USB 2.0, USB Type-C" },
    {
        id: 27,
        value: "2 x USB 3.2, Thunderbolt4 USB-C, HDMI, LAN (RJ45), USB Type-C"
    },
    {
        id: 28,
        value: "2 x USB 3.2, USB Type-C (Power Delivery and DisplayPort), HDMI"
    },
    { id: 29, value: "3 x USB 3.1, HDMI, LAN (RJ45), USB Type-C" },
    { id: 30, value: "3 x USB 3.2, HDMI, LAN (RJ45), USB Type-C" },
    { id: 31, value: "3 x USB 3.2, Thunderbolt4 USB-C, HDMI 2.0, LAN (RJ45)" },
    {
        id: 32,
        value:
            "USB Type-C (Power Delivery and DisplayPort), 3x SuperSpeed USB A, HDMI, LAN (RJ45)"
    }
]
exports.SPEC_VALUE_LAPTOP_WEIGHT = [
    { id: 1, value: "0.966 kg" },
    { id: 2, value: "1 kg" },
    { id: 3, value: "1.1 kg" },
    { id: 4, value: "1.17 kg" },
    { id: 2, value: "1.19kg" },
    { id: 6, value: "1.2 kg" },
    { id: 7, value: "1.236 kg" },
    { id: 8, value: "1.3 kg" },
    { id: 9, value: "1.38 kg" },
    { id: 10, value: "1.4 kg" },
    { id: 11, value: "1.45 kg" },
    { id: 12, value: "1.46 kg" },
    { id: 13, value: "1.2 kg" },
    { id: 14, value: "1.55 kg" },
    { id: 15, value: "1.592 kg" },
    { id: 16, value: "1.66 kg" },
    { id: 17, value: "1.7 kg" },
    { id: 18, value: "1.79kg" },
    { id: 19, value: "1.8 kg" },
    { id: 20, value: "1.96 kg" },
    { id: 21, value: "1.8 kg" },
    { id: 22, value: "1.9 kg" },
    { id: 23, value: "2.1 kg" },
    { id: 24, value: "2.14 kg" },
    { id: 25, value: "2.172 kg" },
    { id: 26, value: "2.3 kg" },
    { id: 27, value: "2.4 kg" },
    { id: 28, value: "2.65 kg" }
]
exports.SPEC_VALUE_LAPTOP_SIZE = [
    { id: 1, value: "Dài 321.7 mm - Rộng 211.8 mm - Dày 17.9 mm" },
    { id: 2, value: "Dài 323 mm - Rộng 218 mm - Dày 17.9 mm" },
    { id: 3, value: "Dài 328.8 mm - Rộng 236 mm - Dày 17.95 mm" },
    { id: 4, value: "Dài 363.96 mm - Rộng 249 mm - Dày 19.9 mm" },
    { id: 2, value: "Dài 363.4 mm - Rộng 254.2 mm - Dày 22.9 mm" },
    { id: 6, value: "Dài 360.2 mm - Rộng 234.0 mm - Dày 17.9 mm" },
    { id: 7, value: "Dài 380 mm - Rộng 258 mm - Dày 19.8 mm" },
    { id: 8, value: "Dài 370 mm - Rộng 262.2 mm - Dày 23.2 mm" },
    { id: 9, value: "Dài 319.2 mm - Rộng 217 mm - Dày 15.95 mm" },
    { id: 10, value: "Dài 307 mm - Rộng 211.2 mm - Dày 14.7 mm" }
]
exports.SPEC_VALUE_LAPTOP_OS = [
    { id: 1, value: "Windows 10 Home SL" },
    { id: 2, value: "Windows 10 Home SL + Office Home&Student 2019 vĩnh viễn" },
    { id: 3, value: "Windows 10 Home 64-bit" },
    { id: 4, value: "Free DOS" },
    { id: 2, value: "Macbook" }
]
exports.SPEC_VALUE_LAPTOP_BATTERY = [
    { id: 1, value: "125Wh" },
    { id: 2, value: "42Wh" },
    { id: 3, value: "65Wh" }
]
exports.SPEC_VALUE_LAPTOP_BATTERY = [
    { id: 1, value: "125Wh" },
    { id: 2, value: "42Wh" },
    { id: 3, value: "65Wh" }
]
//--HARD DRIVE--

exports.BRAND_DRIVE = [
    { id: 1, value: "WD" },
    { id: 2, value: "SAMSUNG" },
    { id: 3, value: "KINGSTON" },
    { id: 4, value: "KINGMAX" },
    { id: 2, value: "SANDISK" },
    { id: 6, value: "LACIE" },
    { id: 7, value: "TRANCEND" },
    { id: 8, value: "CRUCIAL" },
    { id: 9, value: "SEAGATE" }
]
exports.SPEC_VALUE_DRIVE_TYPE = [
    { id: 1, value: "HHD" },
    { id: 2, value: "SSD" },
    { id: 3, value: "Di động HHD" },
    { id: 4, value: "Di động SSD" }
]
exports.SPEC_VALUE_DRIVE_CONNECT = [
    { id: 1, value: "USB Type C" },
    { id: 2, value: "USB 3.0" },
    { id: 3, value: "USB  3.1" },
    { id: 4, value: "USB 3.2" },
    { id: 2, value: "M.2 NVMe" },
    { id: 6, value: "M.2 SATA" },
    { id: 7, value: "SATA 3" },
    { id: 8, value: "PCI e" },
    { id: 9, value: "Ethernet" }
]
exports.SPEC_VALUE_DRIVE_CAPACITY = [
    { id: 1, value: "120GB" },
    { id: 2, value: "128GB" },
    { id: 3, value: "256GB" },
    { id: 4, value: "500GB" },
    { id: 2, value: "1 TB" },
    { id: 6, value: "2 TB" },
    { id: 7, value: "4 TB" },
    { id: 8, value: "6 TB" }
]
exports.SPEC_VALUE_DRIVE_DIMENSION = [
    { id: 1, value: "2.2''" },
    { id: 2, value: "3.2''" },
    { id: 3, value: "M.2 2280" },
    { id: 4, value: "M.2" },
    { id: 2, value: "Card PCI" }
]
exports.SPEC_VALUE_DRIVE_READ_SPEED = [
    { id: 1, value: "114 MB/s" },
    { id: 2, value: "120 MB/s" },
    { id: 3, value: "125 MB/ s" },
    { id: 4, value: "500 MB/s" },
    { id: 2, value: "540 MB/s" },
    { id: 6, value: "545 MB/s" },
    { id: 7, value: "500 MB/s" },
    { id: 8, value: "1550MB/s" },
    { id: 9, value: "2000MB/s" },
    { id: 10, value: "2400MB/s" }
]
exports.SPEC_VALUE_DRIVE_RECORD_SPEED = [
    { id: 1, value: "115 MB/s" },
    { id: 2, value: "350MB/s" },
    { id: 3, value: "550MB/s" },
    { id: 4, value: "950MB/s" },
    { id: 2, value: "1100MB/s" },
    { id: 6, value: "1550MB/s" }
]
exports.SPEC_VALUE_DRIVE_ROTATION_SPEED = [
    { id: 1, value: "5400RPM" },
    { id: 2, value: "5900RPM" },
    { id: 3, value: "7200RPM" }
]
exports.SPEC_VALUE_DRIVE_CACHE = [
    { id: 1, value: "128MB" },
    { id: 2, value: "256MB" }
]

// ---------------------------ADMIN FILTER-----------------------------//

exports.BRAND_LAPTOP_FILTER = [
    { value: "MACBOOK", text: "MACBOOK" },
    { value: "LEVONO", text: "LEVONO" },
    { value: "DELL", text: "DELL" },
    { value: "ASUS", text: "ASUS" },
    { value: "HP", text: "HP" },
    { value: "LG", text: "LG" },
    { value: "MSI", text: "MSI" }
]

exports.SPEC_VALUE_LAPTOP_RAM_FILTER = [
    { value: "4 GB", text: "4 GB" },
    { value: "8 GB", text: "8 GB" },
    { value: "16 GB", text: "16 GB" }
]

exports.SPEC_VALUE_LAPTOP_SCREEN_FILTER = [
    { value: "10 inch", text: "10 inch" },
    { value: "13.3 inch", text: "13.3 inch" },
    { value: "14 inch", text: "14 inch" },
    { value: "15.6 inch", text: "15.6 inch" }
]

// ---------------------------ADMIN INITIAL VALUES DEFAULT-----------------------------//
exports.INITIAL_VALUES_DEFAULT = {
    info: {
        brand_id: 0,
        description: "",
        guarantee: 0,
        name: "",
        price: 0,
        type_id: 2
    },
    images: [
        { id: 0, img: "" },
        { id: 1, img: "" },
        { id: 2, img: "" }
    ]
}

exports.INITIAL_VALUES_LAPTOP_DEFAULT = {
    battery_id: 0,
    cpu_id: 0,
    gpu_id: 0,
    os_id: 0,
    port_id: 0,
    ram_id: 0,
    rom_id: 0,
    screen_id: 0,
    size_id: 0,
    weight_id: 0
}
exports.INITIAL_VALUES_DRIVE_DEFAULT = {
    drive_type_id: 0,
    capacity_id: 0,
    connect_id: 0,
    dimension_id: 0,
    read_id: 0,
    write_id: 0,
    rotation_id: 0,
    cache_id: 0
}

// ---------------------------ADMIN API POST-----------------------------//
exports.DATA_POST_LAPTOP = {
    info: {
        id: 0,
        brand_id: 4,
        description: "ABC",
        guarantee: 24,
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        price: 15399000,
        type_id: 2
    },
    spec: {
        battery_id: 2,
        cpu_id: 6,
        gpu_id: 2,
        os_id: 3,
        port_id: 2,
        ram_id: 1,
        rom_id: 2,
        screen_id: 2,
        size_id: 2,
        weight_id: 2
    },
    image: {
        img1: "link1",
        img2: "link2",
        img3: "link3"
    }
}

exports.DATA_POST_DRIVE = {
    info: {
        id: 0,
        brand_id: 4,
        description: "ABC",
        guarantee: 24,
        name: "Ổ cứng SSD BEST",
        price: 2000000,
        type_id: 3
    },
    spec: {
        drive_type_id: 2,
        capacity_id: 2,
        connect_id: 4,
        dimension_id: 3,
        read_id: 2,
        write_id: 2,
        rotation_id: 3,
        cache_id: 1
    },
    image: {
        img1: "link1",
        img2: "link2",
        img3: "link3"
    }
}

exports.DATA_CREATE_LAPTOP = {
    info: {
        name: "LAP_TEST_2",
        description: "description 1",
        guarantee: 24,
        price: 120000,
        brand_id: 2,
        type_id: 2
    },
    spec: {
        cpu_id: 1,
        gpu_id: 1,
        ram_id: 1,
        size_id: 1,
        rom_id: 1,
        screen_id: 1,
        port_id: 2,
        os_id: 1,
        battery_id: 1,
        weight_id: 1
    },
    image: {
        img1: "IMG 1",
        img2: "IMG 2"
    }
}
// ---------------------------WEB FILTER-----------------------------//
//laptop
exports.BRAND_LAPTOP_FILTER_WEB = [
    {
        id: 1,
        value: "Dell",
        active: false
    },
    {
        id: 2,
        value: "Hp",
        active: false
    },
    {
        id: 3,
        value: "Lenovo",
        active: false
    },
    {
        id: 4,
        value: "Acer",
        active: false
    },
    {
        id: 2,
        value: "Msi",
        active: false
    },
    {
        id: 6,
        value: "Macbook",
        active: false
    },
    {
        id: 7,
        value: "Asus",
        active: false
    }
]
exports.RAM_LAPTOP_FILTER_WEB = [
    {
        value: "16 GB",
        active: false
    },
    {
        value: "2 GB",
        active: false
    },
    {
        value: "32 GB",
        active: false
    },
    {
        value: "4 GB",
        active: false
    },
    {
        value: "8 GB",
        active: false
    }
]
exports.SCREEN_LAPTOP_FILTER_WEB = [
    {
        value: "13 inch",
        active: false
    },
    {
        value: "13.3 inch",
        active: false
    },
    {
        value: "13.4 inch",
        active: false
    },
    {
        value: "14 inch",
        active: false
    },
    {
        value: "15 inch",
        active: false
    },
    {
        value: "15.6 inch",
        active: false
    },
    {
        value: "17 inch",
        active: false
    }
]
exports.CPU_LAPTOP_FILTER_WEB = [
    {
        value: "AMD Ryzen 3",
        active: false
    },
    {
        value: "AMD Ryzen 2",
        active: false
    },
    {
        value: "Intel Celeron",
        active: false
    },
    {
        value: "Intel Core i3",
        active: false
    },
    {
        value: "Intel Core i5",
        active: false
    },
    {
        value: "Intel Core i7",
        active: false
    },
    {
        value: "Intel Pentium",
        active: false
    }
]
//drive
exports.CONNECT_LAPTOP_FILTER_WEB = [
    {
        value: "Di động HHD",
        active: false
    },
    {
        value: "Di động SSD",
        active: false
    },
    {
        value: "HHD",
        active: false
    },
    {
        value: "SSD",
        active: false
    }
]
exports.BRAND_DRIVE_FILTER_WEB = [
    {
        id: 8,
        value: "WD",
        active: false
    },
    {
        id: 9,
        value: "SAMSUNG",
        active: false
    },
    {
        id: 10,
        value: "KINGSTON",
        active: false
    },
    {
        id: 11,
        value: "KINGMAX",
        active: false
    },
    {
        id: 12,
        value: "SANDISK",
        active: false
    },
    {
        id: 13,
        value: "LACIE",
        active: false
    },
    {
        id: 14,
        value: "TRANSCEND",
        active: false
    },
    {
        id: 15,
        value: "CRUCIAL",
        active: false
    },
    {
        id: 16,
        value: "SEAGATE",
        active: false
    }
]
exports.CAPACITY_DRIVE_FILTER_WEB = [
    {
        value: "120GB",
        active: false
    },
    {
        value: "128GB",
        active: false
    },
    {
        value: "1TB",
        active: false
    },
    {
        value: "256GB",
        active: false
    },
    {
        value: "2TB",
        active: false
    },
    {
        value: "4TB",
        active: false
    },
    {
        value: "500GB",
        active: false
    },
    {
        value: "6TB",
        active: false
    }
]
// exports.PRICE_LAPTOP_FILTER_WEB = [
//     { id: 1, text: "Dưới 2 triệu", value: "0-5000", active: false },
//     { id: 2, text: "Dưới 10 triệu", value: "0-10", active: false },
//     { id: 3, text: "10 - 15 triệu", value: "10-15", active: false },
//     { id: 4, text: "15 - 20 triệu", value: "15-20", active: false },
//     { id: 2, text: "20 - 25 triệu", value: "20-25", active: false },
//     { id: 6, text: "Trên 25 triệu", value: "25-100", active: false }
// ]
// exports.PRICE_HARD_DEVICE_FILTER_WEB = [
//     { id: 1, text: "Dưới 500 ngàn", value: "0-2", active: false },
//     { id: 2, text: "500 - 1 triệu", value: "0-10", active: false },
//     { id: 3, text: "1 - 2 triệu", value: "10-15", active: false },
//     { id: 4, text: "Trên 2 triệu", value: "15-20", active: false }
// ]
// ---------------------------WEB-----------------------------//
exports.PATH_BRAND = {
    ASUS: "/products/laptop/asus",
    HP: "/products/laptop/hp",
    LEVONO: "/products/laptop/lenovo",
    ACER: "/products/laptop/acer",
    DELL: "/products/laptop/dell",
    LG: "/products/laptop/lg",
    MSI: "/products/laptop/msi"
}

exports.PATH_PRICE = {
    PRICE_5TR: "/products/laptop/gia=1-5000000",
    PRICE_5TR10TR: "/products/laptop/gia=5000000-10000000",
    PRICE_10TR15TR: "/products/laptop/gia=10000000-15000000",
    PRICE_15TR20TR: "/products/laptop/gia=15000000-20000000",
    PRICE_20TR25TR: "/products/laptop/gia=20000000-25000000",
    PRICE_25TR30TR: "/products/laptop/gia=25000000-30000000",
    PRICE_30TR: "/products/laptop/gia=30000000"
}

const NAV_MAP_LI_LAPTOP_GAMING_MID = [
    { id: 1, title: "MSI", link: "brand=5" },
    { id: 2, title: "LEVONO", link: "brand=3" },
    { id: 3, title: "ACER", link: "brand=4" },
    { id: 4, title: "HP", link: "brand=2" }
]
const NAV_MAP_LI_LAPTOP_GAMING_SENIOR = [
    { id: 1, title: "MSI", link: "brand=5" },
    { id: 2, title: "LEVONO", link: "brand=3" },
    { id: 3, title: "ACER", link: "brand=4" },
    { id: 4, title: "HP", link: "brand=2" }
]
const NAV_MAP_LI_LAPTOP_GAMING_SMALL = [
    { id: 1, title: "MSI", link: "brand=5" },
    { id: 2, title: "LEVONO", link: "brand=3" },
    { id: 3, title: "ACER", link: "brand=4" },
    { id: 4, title: "HP", link: "brand=2" }
]
const NAV_MAP_LI_LAPTOP_OFFICE_CHEAP = [
    { id: 1, title: "ACER", link: "brand=4" },
    { id: 2, title: "ASUS", link: "brand=7" }
]
const NAV_MAP_LI_LAPTOP_OFFICE_MID = [
    { id: 1, title: "HP", link: "brand=2" },
    { id: 2, title: "LEVONO", link: "brand=3" },
    { id: 3, title: "ACER", link: "brand=4" }
]
const NAV_MAP_LI_LAPTOP_OFFICE_SENIOR = [
    { id: 1, title: "MACBOOK", link: "brand=6" },
    { id: 2, title: "HP", link: "brand=2" }
]
const NAV_MAP_LI_LAPTOP_ENGINEERING_MID = [
    { id: 2, title: "ACER", link: "brand=4" },
    { id: 2, title: "HP", link: "brand=2" }
]
const NAV_MAP_LI_LAPTOP_ENGINEERING_SENIOR = [
    { id: 1, title: "MACBOOK", link: "brand=6" },
    { id: 2, title: "DELL", link: "brand=1" },
    { id: 2, title: "ACER", link: "brand=4" },
    { id: 2, title: "HP", link: "brand=2" }
]
const NAV_MAP_LI_HDD = [
    { id: 1, title: "WD", link: "/laptop-gamming/tam-trung/HP" },
    { id: 2, title: "Seagate", link: "/laptop-gamming/LEVONO" },
    { id: 3, title: "Trên 8TB", link: "/laptop-gamming/DELL" }
]
const NAV_MAP_LI_SSD = [
    { id: 1, title: "2.2' SATA 3", link: "/laptop-gamming/tam-trung/HP" },
    { id: 2, title: "M.2 SATA 3", link: "/laptop-gamming/MAC" },
    { id: 3, title: "M.2 PCIe", link: "/laptop-gamming/DELL" }
]
const NAV_MAP_LI_OCdidong = [
    { id: 1, title: "WD", link: "/laptop-gamming/tam-trung/THINKPAD" },
    { id: 2, title: "Sandisk", link: "/laptop-gamming/MAC" },
    { id: 3, title: "Seagate", link: "/laptop-gamming/DELL" }
]
const NAV_MAP_LI_WIRELESS_MOUSE = [
    { id: 1, title: "LOGITECH", link: "/not-found" },
    { id: 2, title: "RAZER", link: "/not-found" },
    { id: 3, title: "CORSAIR", link: "/not-found" },
    { id: 4, title: "ASUS", link: "/not-found" }
]
const NAV_MAP_LI_WIRED_MOUSE = [
    { id: 1, title: "DAREU", link: "/not-found" },
    { id: 2, title: "LOGITECH", link: "/not-found" },
    { id: 3, title: "CORSAIR", link: "/not-found" },
    { id: 4, title: "FUHLEN", link: "/not-found" }
]
const NAV_MAP_LI_MECHANICAL_KEYBOARD = [
    { id: 1, title: "LOGITECH", link: "/not-found" },
    { id: 2, title: "RAZER", link: "/not-found" },
    { id: 3, title: "CORSAIR", link: "/not-found" }
]
const NAV_MAP_LI_MECHANICAL_FAKE_KEYBOARD = [
    { id: 1, title: "ASUS", link: "/not-found" },
    { id: 2, title: "Cerberus", link: "/not-found" },
    { id: 3, title: "LOGITECH", link: "/not-found" }
]
exports.NAV_MAP_LAPTOP_GAMING = [
    {
        id: 1,
        title: "Tầm Trung",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_LAPTOP_GAMING_MID
    },
    {
        id: 2,
        title: "Cao Cấp",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_LAPTOP_GAMING_SENIOR
    },
    {
        id: 3,
        title: "Mỏng Nhẹ",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_LAPTOP_GAMING_SMALL
    }
]
exports.NAV_MAP_LAPTOP_OFFICE = [
    {
        id: 1,
        title: "Giá Rẻ",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_LAPTOP_OFFICE_CHEAP
    },
    {
        id: 2,
        title: "Tầm Trung",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_LAPTOP_OFFICE_MID
    },
    {
        id: 3,
        title: "Doanh Nghiệp Cao Cấp",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_LAPTOP_OFFICE_SENIOR
    }
]
exports.NAV_MAP_LAPTOP_ENGINEERING = [
    {
        id: 1,
        title: "Tầm Trung",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_LAPTOP_ENGINEERING_MID
    },
    {
        id: 2,
        title: "Cao Cấp",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_LAPTOP_ENGINEERING_SENIOR
    }
]
exports.NAV_MAP_HARD = [
    {
        id: 1,
        title: "Ổ Cứng HDD",
        link: "/laptop-gamming/tam-trung",
        nav_map_li: NAV_MAP_LI_HDD
    },
    {
        id: 2,
        title: "Ổ Cứng SSD",
        link: "/laptop-gamming/cao-cap",
        nav_map_li: NAV_MAP_LI_SSD
    },
    {
        id: 3,
        title: "Ổ Cứng Di Động",
        link: "/laptop-gamming/cao-cap",
        nav_map_li: NAV_MAP_LI_OCdidong
    }
]
exports.NAV_MAP_KEYBOARD = [
    {
        id: 1,
        title: "Bàn Phím Cơ",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_MECHANICAL_KEYBOARD
    },
    {
        id: 2,
        title: "Bàn Phím Giả Cơ",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_MECHANICAL_FAKE_KEYBOARD
    }
]
exports.NAV_MAP_MOUSE = [
    {
        id: 1,
        title: "Chuột Không Dây",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_WIRED_MOUSE
    },
    {
        id: 2,
        title: "Chuột Có Dây",
        link: "/not-found",
        nav_map_li: NAV_MAP_LI_WIRELESS_MOUSE
    }
]

// ---------------------------RENDER-----------------------------//

exports.RENDER_LAPTOP_DETAIL_DEFAULT = {
    id: 0,
    images: [
        {
            id: 1,
            img: ""
        },
        {
            id: 2,
            img: ""
        },
        {
            id: 3,
            img: ""
        }
    ],
    info: {
        name: "",
        price: "",
        cpu: "",
        screen: "",
        ram: "",
        rom: "",
        gpu: "",
        port: "",
        battery: "",
        size: "",
        weight: "",
        guarantee: ""
    },
    description: ""
}

exports.RENDER_HOME_DEFAULT = [
    {
        id: 0,
        brand: "",
        result: [
            {
                id: 0,
                name: "",
                image: "",
                ram: "",
                rom: "",
                guarantee: 0,
                price: ""
            }
        ]
    }
]

exports.RENDER_HOME = [
    {
        id: 1,
        brand: "Latop bán chạy",
        results: [
            {
                id: 4,
                name: "Laptop Dell (999099ET)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 8GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "11.690.000₫"
            },
            {
                id: 2,
                name: "Laptop Dell (999099ET)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "7.390.000₫ "
            },
            {
                id: 6,
                name: "Laptop Dell 02 (785914ET)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "11.690.000₫"
            },
            {
                id: 7,
                name: "Laptop Dell 02 (785914ET)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "11.690.000₫"
            }
        ]
    },
    {
        id: 2,
        brand: "Laptop đáng mua",
        results: [
            {
                id: 1,
                name: "Laptop Asus 045 (JCBDC123)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "11.690.000₫"
            },
            {
                id: 2,
                name: "Laptop Asus 058 (JCBDC003)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "13.990.000₫"
            },
            {
                id: 3,
                name: "Laptop Asus 08 (JDC123)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "12.690.000₫"
            },
            {
                id: 4,
                name: "Laptop Asus 08 (JDC123)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "12.690.000₫"
            },
            {
                id: 2,
                name: "Laptop Asus 08 (JDC123)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "12.690.000₫"
            },
            {
                id: 6,
                name: "Laptop Asus 08 (JDC123)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "12.690.000₫"
            },
            {
                id: 7,
                name: "Laptop Asus 08 (JDC123)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "12.690.000₫"
            },
            {
                id: 8,
                name: "Laptop Asus 08 (JDC123)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "12.690.000₫"
            }
        ]
    },
    {
        id: 3,
        brand: "Dòng máy Levono",
        results: [
            {
                id: 4,
                name: "Laptop Dell (999099ET)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 8GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "11.690.000₫"
            },
            {
                id: 2,
                name: "Laptop Dell (999099ET)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "7.390.000₫ "
            },
            {
                id: 6,
                name: "Laptop Dell 02 (785914ET)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "11.690.000₫"
            },
            {
                id: 7,
                name: "Laptop Dell 02 (785914ET)",
                image:
                    "https://cdn.tgdd.vn/Products/Images/44/235376/dell-inspiron-3505-r3-y1n1t1-15-600x600.jpg",
                ram: "RAM 4GB",
                rom: "SSD 512GB",
                guarantee: 12,
                price: "11.690.000₫"
            }
        ]
    }
]

exports.RENDER_LAPTOP_DETAIL = {
    id: 2,
    images: [
        {
            id: 16,
            img:
                "https://cdn.tgdd.vn/Products/Images/44/216292/lenovo-ideapad-s145-15iil-i3-1005g1-4gb-256gb-win1-2-org.jpg"
        },
        {
            id: 17,
            img:
                "https://cdn.tgdd.vn/Products/Images/44/216292/lenovo-ideapad-s145-15iil-i3-1005g1-4gb-256gb-win1-1-org.jpg"
        },
        {
            id: 18,
            img:
                "https://cdn.tgdd.vn/Products/Images/44/216292/lenovo-ideapad-s145-15iil-i3-1005g1-4gb-256gb-win1-6-org.jpg"
        }
    ],
    info: {
        name: "Levono Think 15 (Chính hãng)",
        price: "11.690.000₫",
        cpu: "Intel Core i5 Coffee Lake, 9300H, 2.40 GHz",
        screen: "15.6 inch, Full HD (1920 x 1080)",
        ram: "4 GB, DDR4 (On board +1 khe), 2133 MHz",
        rom: "SSD 512 GB, M.2 PCIe",
        gpu: "Intel® Iris® Xe Graphics",
        port: "2 x USB 2.0, USB 3.1, HDMI, LAN (RJ45)",
        battery: "3 cell - 42Whr",
        size: "19.90 x 328.70 x 239.50 mm",
        weight: "1.49 kg",
        guarantee: "12 Tháng"
    },
    description: "Đang cập nhật nha"
}

exports.RENDER_CART = [
    {
        id: 2,
        image:
            "https://cdn.tgdd.vn/Products/Images/44/236315/lenovo-ideapad-slim-3-15iil05-i3-81we0132vn-600x600.jpg",
        name: "Levono Think 15 (Chính hãng)",
        spec1: "4 GB",
        spec2: "SSD 512 GB",
        price: 11690000,
        qty: 1
    },
    {
        id: 6,
        image:
            "https://cdn.tgdd.vn/Products/Images/44/236315/lenovo-ideapad-slim-3-15iil05-i3-81we0132vn-600x600.jpg",
        name: "Levono Think 16 (Chính hãng)",
        spec1: "4 GB",
        spec2: "SSD 512 GB",
        price: 11990000,
        qty: 1
    },
    {
        id: 7,
        image:
            "https://cdn.tgdd.vn/Products/Images/1902/205985/o-cung-hdd-1tb-seagate-backup-plus-slim-xam-2-org.jpg",
        name: "Ổ cứng SSD ",
        spec1: "SSD",
        spec2: "USB TYPE C",
        price: 500000,
        qty: 1
    }
]

exports.DOSSIER_DATA_LAPTOP = [
    {
        id: 1,
        brand: "LEVONO",
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        cpu: "Intel 5011",
        ram: "4 GB",
        rom: "SSD 512",
        screen: "15.6 inch",
        description: "Laptop Lenovo ThinkBook 15IIL i3 (20SM00D9VN) sở ..."
    },
    {
        id: 2,
        brand: "LEVONO",
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        cpu: "Intel 5011",
        ram: "4 GB",
        rom: "SSD 512",
        screen: "15.6 inch",
        description: "Laptop Lenovo ThinkBook 15IIL i3 (20SM00D9VN) sở ..."
    },
    {
        id: 3,
        brand: "LEVONO",
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        cpu: "Intel 5011",
        ram: "4 GB",
        rom: "SSD 512",
        screen: "15.6 inch",
        description: "Laptop Lenovo ThinkBook 15IIL i3 (20SM00D9VN) sở ..."
    },
    {
        id: 4,
        brand: "LEVONO",
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        cpu: "Intel 5011",
        ram: "4 GB",
        rom: "SSD 512",
        screen: "15.6 inch",
        description: "Laptop Lenovo ThinkBook 15IIL i3 (20SM00D9VN) sở ..."
    },
    {
        id: 2,
        brand: "LEVONO",
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        cpu: "Intel 5011",
        ram: "4 GB",
        rom: "SSD 512",
        screen: "15.6 inch",
        description: "Laptop Lenovo ThinkBook 15IIL i3 (20SM00D9VN) sở ..."
    },
    {
        id: 6,
        brand: "LEVONO",
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        cpu: "Intel 5011",
        ram: "4 GB",
        rom: "SSD 512",
        screen: "15.6 inch",
        description: "Laptop Lenovo ThinkBook 15IIL i3 (20SM00D9VN) sở ..."
    },
    {
        id: 7,
        brand: "LEVONO",
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        cpu: "Intel 5011",
        ram: "4 GB",
        rom: "SSD 512",
        screen: "15.6 inch",
        description: "Laptop Lenovo ThinkBook 15IIL i3 (20SM00D9VN) sở ..."
    },
    {
        id: 8,
        brand: "LEVONO",
        name: "Laptop Lenovo ThinkBook 15IIL i3",
        cpu: "Intel 5011",
        ram: "4 GB",
        rom: "SSD 512",
        screen: "15.6 inch",
        description: "Laptop Lenovo ThinkBook 15IIL i3 (20SM00D9VN) sở ..."
    }
]

exports.DOSSIER_DATA_DEVICE = [
    {
        id: 1,
        brand: "SAMSUNG",
        name: "Ổ CỨNG 01",
        drive_type: "SSD",
        capacity: "512GB",
        description: "Là ổ cứng ..."
    },
    {
        id: 2,
        brand: "SANDISK",
        name: "Ổ CỨNG 02",
        drive_type: "SSD",
        capacity: "512GB",
        description: "Là ổ cứng ..."
    },
    {
        id: 3,
        brand: "KINGMAX",
        name: "Ổ CỨNG 03",
        drive_type: "HHD",
        capacity: "4T",
        description: "Là ổ cứng ..."
    },
    {
        id: 4,
        brand: "SANDISK",
        name: "Ổ CỨNG 04",
        drive_type: "SSD",
        capacity: "512GB",
        description: "Là ổ cứng ..."
    }
]

exports.MAINVIEW = {
    images: [
        {
            id: 0,
            img:
                "https://anphat.com.vn/media/product/30746_laptop_acer_aspire_3_a315_42_r4xd_nx_hf9sv_008_1.png"
        },
        {
            id: 1,
            img:
                "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/24/637443973976892975...-2.png"
        },
        {
            id: 2,
            img:
                "https://cdn.tgdd.vn/Products/Images/44/207883/acer-aspire-3-a315-54-57pj-i5-8265u-4gb-256gb-win1-1.jpg"
        }
    ]
}
