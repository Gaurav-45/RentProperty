//Import images from images folder
import room1 from './images/room1.jpg'
import room2 from './images/room2.jpg'
import room3 from './images/room3.jpg'
import room4 from './images/room4.jpg'
import room5 from './images/room5.jpg'
import room6 from './images/room6.jpg'
import room7 from './images/room7.jpg'
import room8 from './images/room8.jpg'
import room9 from './images/room9.jpg'


//Dummy data
const data = [{
        "id": 1,
        "name": "Moonwin House",
        "address": "218 Sutherland Pass",
        "city": "Mumbai",
        "price": 9186,
        "propertyType": "Houses",
        "fromDate": "22/02/2023",
        "image": room5
    },
    {
        "id": 2,
        "name": "Downsend House",
        "address": "4 Elmside Pass",
        "city": "Fundong",
        "price": 10831,
        "propertyType": "Penthouse",
        "fromDate": "14/07/2023",
        "image": room9
    },
    {
        "id": 3,
        "name": "Floosto House",
        "address": "9 Eastlawn Junction",
        "city": "Thuận Nam",
        "price": 9637,
        "propertyType": "PG",
        "fromDate": "19/06/2023",
        "image": room1
    },
    {
        "id": 4,
        "name": "Downsend House",
        "address": "1145 Sheridan Hill",
        "city": "Qixingtai",
        "price": 10210,
        "propertyType": "Houses",
        "fromDate": "16/06/2023",
        "image": room3
    },
    {
        "id": 5,
        "name": "Absolute House",
        "address": "5 Crowley Street",
        "city": "Chigorodó",
        "price": 13764,
        "propertyType": "Penthouse",
        "fromDate": "04/12/2022",
        "image": room6
    },
    {
        "id": 6,
        "name": "Chair House",
        "address": "8 Mosinee Center",
        "city": "Casal Galego",
        "price": 5484,
        "propertyType": "Penthouse",
        "fromDate": "02/04/2023",
        "image": room5
    },
    {
        "id": 7,
        "name": "Executive house",
        "address": "320 Ruskin Junction",
        "city": "Gongchang Zhen",
        "price": 14455,
        "propertyType": "Villa",
        "fromDate": "03/12/2022",
        "image": room2
    },
    {
        "id": 8,
        "name": "Yoke house",
        "address": "1412 High Crossing Avenue",
        "city": "Mumbai",
        "price": 10122,
        "propertyType": "Penthouse",
        "fromDate": "30/09/2023",
        "image": room8
    },
    {
        "id": 9,
        "name": "Scout house",
        "address": "1 Boyd Alley",
        "city": "Yukuriawat",
        "price": 6995,
        "propertyType": "Villa",
        "fromDate": "22/01/2023",
        "image": room4
    },
    {
        "id": 10,
        "name": "Mannat",
        "address": "8 Roxbury Terrace",
        "city": "Sanying",
        "price": 14176,
        "propertyType": "Villa",
        "fromDate": "06/08/2023",
        "image": room2
    },
    {
        "id": 11,
        "name": "Little Wood",
        "address": "958 Cherokee Avenue",
        "city": "Wenquan",
        "price": 13265,
        "propertyType": "Villa",
        "fromDate": "07/11/2023",
        "image": room2
    },
    {
        "id": 12,
        "name": "House Slynt",
        "address": "10 Lakewood Drive",
        "city": "Kabac",
        "price": 9564,
        "propertyType": "Villa",
        "fromDate": "24/12/2022",
        "image": room7
    },
    {
        "id": 13,
        "name": "Bakersfield",
        "address": "3484 Bonner Point",
        "city": "Mumbai",
        "price": 4345,
        "propertyType": "Villa",
        "fromDate": "23/04/2023",
        "image": room8
    },
    {
        "id": 14,
        "name": "Old Cottage",
        "address": "53 Monument Place",
        "city": "Černošice",
        "price": 4978,
        "propertyType": "Houses",
        "fromDate": "06/01/2023",
        "image": room7
    },
    {
        "id": 15,
        "name": "Hamilton",
        "address": "662 Scofield Street",
        "city": "Makumbako",
        "price": 11448,
        "propertyType": "Houses",
        "fromDate": "08/10/2023",
        "image": room2
    },
    {
        "id": 16,
        "name": "Dew Drop Inn",
        "address": "05124 Kennedy Center",
        "city": "Cacocum",
        "price": 14469,
        "propertyType": "Houses",
        "fromDate": "22/12/2022",
        "image": room7
    },
    {
        "id": 17,
        "name": "Lilac Cottage",
        "address": "36410 Carioca Place",
        "city": "Mumbai",
        "price": 6011,
        "propertyType": "Houses",
        "fromDate": "26/07/2023",
        "image": room4
    },
    {
        "id": 18,
        "name": "Darth Vader House",
        "address": "8510 Delaware Hill",
        "city": "Tempeh Tengah",
        "price": 5254,
        "propertyType": "Villa",
        "fromDate": "05/08/2023",
        "image": room9
    },
    {
        "id": 19,
        "name": "Salty Dog",
        "address": "16 Basil Hill",
        "city": "São Fidélis",
        "price": 8407,
        "propertyType": "Villa",
        "fromDate": "17/11/2022",
        "image": room5
    },
    {
        "id": 20,
        "name": "The Gables",
        "address": "34542 Mosinee Trail",
        "city": "Kunvald",
        "price": 13467,
        "propertyType": "Penthouse",
        "fromDate": "28/10/2023",
        "image": room3
    },
    {
        "id": 21,
        "name": "Hollie",
        "address": "954 Stephen Way",
        "city": "Hengtanggang",
        "price": 12004,
        "propertyType": "Houses",
        "fromDate": "09/05/2023",
        "image": room5
    },
    {
        "id": 22,
        "name": "Windy Ridge",
        "address": "30 Parkside Hill",
        "city": "Yanhe",
        "price": 10586,
        "propertyType": "Penthouse",
        "fromDate": "09/01/2023",
        "image": room7
    },
    {
        "id": 23,
        "name": "Patel",
        "address": "59 Bay Crossing",
        "city": "Maulawin",
        "price": 11191,
        "propertyType": "Penthouse",
        "fromDate": "14/11/2023",
        "image": room1
    },
    {
        "id": 24,
        "name": "Campion",
        "address": "9 Texas Center",
        "city": "Mumbai",
        "price": 10501,
        "propertyType": "Villa",
        "fromDate": "08/02/2023",
        "image": room3
    },
    {
        "id": 25,
        "name": "Hunters Wood",
        "address": "1830 Bay Point",
        "city": "Mariana",
        "price": 4268,
        "propertyType": "Villa",
        "fromDate": "12/02/2023",
        "image": room4
    },
    {
        "id": 26,
        "name": "Henderson",
        "address": "71 Graceland Hill",
        "city": "Rasshevatskaya",
        "price": 13685,
        "propertyType": "Villa",
        "fromDate": "02/09/2023",
        "image": room1
    },
    {
        "id": 27,
        "name": "Bridgeland’s",
        "address": "5709 Golf View Hill",
        "city": "Linggou",
        "price": 9218,
        "propertyType": "PG",
        "fromDate": "08/01/2023",
        "image": room1
    },
    {
        "id": 28,
        "name": "Woodside",
        "address": "234 Susan Pass",
        "city": "Bulakgebang",
        "price": 10259,
        "propertyType": "Villa",
        "fromDate": "17/06/2023",
        "image": room9
    },
    {
        "id": 29,
        "name": "Birchwood House",
        "address": "1 Homewood Pass",
        "city": "Mumbai",
        "price": 13969,
        "propertyType": "PG",
        "fromDate": "26/10/2023",
        "image": room7
    },
    {
        "id": 30,
        "name": "Townville",
        "address": "92925 Bashford Trail",
        "city": "Soanindrariny",
        "price": 6849,
        "propertyType": "Villa",
        "fromDate": "11/06/2023",
        "image": room8
    },
    {
        "id": 31,
        "name": "Evil House",
        "address": "3841 Bay Road",
        "city": "Nong Phai",
        "price": 6025,
        "propertyType": "PG",
        "fromDate": "16/04/2023",
        "image": room2
    },
    {
        "id": 32,
        "name": "The Light side",
        "address": "546 Dawn Street",
        "city": "Kristinestad",
        "price": 13366,
        "propertyType": "Villa",
        "fromDate": "10/03/2023",
        "image": room2
    },
    {
        "id": 33,
        "name": "Rubble Hall",
        "address": "2 Ronald Regan Drive",
        "city": "Mumbai",
        "price": 12221,
        "propertyType": "Houses",
        "fromDate": "07/09/2023",
        "image": room2
    },
    {
        "id": 34,
        "name": "Hedera House",
        "address": "345 Petterle Plaza",
        "city": "Glatik",
        "price": 13947,
        "propertyType": "PG",
        "fromDate": "03/09/2023",
        "image": room6
    },
    {
        "id": 35,
        "name": "The Dark Side",
        "address": "7 Dawn Parkway",
        "city": "Tudela",
        "price": 10035,
        "propertyType": "Penthouse",
        "fromDate": "19/06/2023",
        "image": room6
    },
    {
        "id": 36,
        "name": "Foxmoor Hall",
        "address": "1 Darwin Center",
        "city": "Mumbai",
        "price": 8196,
        "propertyType": "Villa",
        "fromDate": "01/09/2023",
        "image": room1
    },
    {
        "id": 37,
        "name": "Holmeswood",
        "address": "6070 Blackbird Street",
        "city": "Sinarwangi",
        "price": 11153,
        "propertyType": "Houses",
        "fromDate": "20/08/2023",
        "image": room7
    },
    {
        "id": 38,
        "name": "Russett House",
        "address": "5279 Glacier Hill Place",
        "city": "Vichuga",
        "price": 12977,
        "propertyType": "Houses",
        "fromDate": "17/10/2023",
        "image": room2
    },
    {
        "id": 39,
        "name": "Eastholme",
        "address": "2 Beilfuss Place",
        "city": "Baler Baleagung",
        "price": 9466,
        "propertyType": "Villa",
        "fromDate": "15/03/2023",
        "image": room6
    },
    {
        "id": 40,
        "name": "House Celtigar",
        "address": "89 Blackbird Road",
        "city": "Mumbai",
        "price": 5612,
        "propertyType": "Villa",
        "fromDate": "04/01/2023",
        "image": room3
    },
    {
        "id": 41,
        "name": "Beech Tree Cottage",
        "address": "4 Dwight Parkway",
        "city": "Atarodangwautu",
        "price": 4982,
        "propertyType": "Houses",
        "fromDate": "26/12/2022",
        "image": room8
    },
    {
        "id": 42,
        "name": "Springfield",
        "address": "6918 Katie Point",
        "city": "Rivera",
        "price": 14889,
        "propertyType": "Villa",
        "fromDate": "02/10/2023",
        "image": room8
    },
    {
        "id": 43,
        "name": "Blackberry Cottage",
        "address": "2405 Fallview Street",
        "city": "Mumbai",
        "price": 6480,
        "propertyType": "Penthouse",
        "fromDate": "23/02/2023",
        "image": room5
    },
    {
        "id": 44,
        "name": "Chimney Cottage",
        "address": "5541 Lindbergh Avenue",
        "city": "Vanderbijlpark",
        "price": 12443,
        "propertyType": "Villa",
        "fromDate": "31/08/2023",
        "image": room3
    },
    {
        "id": 45,
        "name": "Brahmins House",
        "address": "515 Arkansas Drive",
        "city": "Yezhou",
        "price": 9078,
        "propertyType": "Houses",
        "fromDate": "28/06/2023",
        "image": room7
    },
    {
        "id": 46,
        "name": "No Wake Zone",
        "address": "92 Park Meadow Court",
        "city": "Purwodadi",
        "price": 11294,
        "propertyType": "PG",
        "fromDate": "31/07/2023",
        "image": room5
    },
    {
        "id": 47,
        "name": "Fanta Sea",
        "address": "9451 Shoshone Court",
        "city": "Baojiadian",
        "price": 5015,
        "propertyType": "PG",
        "fromDate": "22/05/2023",
        "image": room1
    },
    {
        "id": 48,
        "name": "High Trees",
        "address": "67 Gerald Center",
        "city": "Parfino",
        "price": 9387,
        "propertyType": "Houses",
        "fromDate": "01/03/2023",
        "image": room3
    },
    {
        "id": 49,
        "name": "Willow Barn",
        "address": "307 Sycamore Lane",
        "city": "Mumbai",
        "price": 7454,
        "propertyType": "PG",
        "fromDate": "20/10/2023",
        "image": room8
    },
    {
        "id": 50,
        "name": "Bennett",
        "address": "19 Graedel Junction",
        "city": "Sharan",
        "price": 10964,
        "propertyType": "PG",
        "fromDate": "07/03/2023",
        "image": room5
    }
]

export default data;