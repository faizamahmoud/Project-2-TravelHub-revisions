// not needed
const Post = require('./Post');


const Posts = [
    {
        title: "What Are Some Places You Would Love To Travel To!",
        subject: "Iceland Is My Dream Destination",
        body: "Iceland is a place that I would love to see. The northern lights has also been fascinating to me. Hopefully one day I can make that happen!",
        date: new Date(2022, 6, 4),
        image: 'https://deadline.com/wp-content/uploads/2022/06/Screenshot-2022-06-17-at-07.22.33.png?w=681&h=383&crop=1'
    },
    {
        title: "any hiking trail suggestions in New Zealand? ",
        subject: "suggestions",    
        body: "I'm specifically traveling to South Island in a couple of weeks.",
        date: new Date(2022, 2, 3),
        image: 'https://www.nicolelabarge.com/wp-content/uploads/2018/08/new-zealand-3021090_1280-1024x651.jpg'
    },
    {
        title:'Pikes Peak',
        subject:'',
        body:"I've climbed all 54 of Colorado's fourteeners and this one by far is my favorite! ",
        date:new Date(2022, 1, 9),
        image:'https://www.roamingtheusa.com/wp-content/uploads/2022/02/Snow-Capped-Pikes-Peak-Soaring-over-Garden-Gods-Colorado-1536x1020.jpg.webp'
    },
    {
        title: "where the single women at?",
        subject: "single man",    
        body: "I'm wanting to bring a wife back with me, where did you guys have success? personally done with American women",
        date: new Date(2022, 9, 6),
        image: ''
    },
    {
        title: "here's what you're NOT going to do in Paris!",
        subject: "avoid the french!",    
        body: "guys, this guy came up to me and hit me square in the face because I told him I'm American! Then, of course, only I went to jail and didn't get out until a day before my flight home! Moral of the Story:Tell them you're Candian guys!! ",
        date: new Date(2022, 3, 4),
        image: 'https://cdn1.matadornetwork.com/blogs/1/2015/12/Portrait-of-angry-man-in-front-of-Eiffel-Tower-Paris-France-1200x853.jpg'
    },
    {
        title: "Croatia the beautiful!",
        subject: "",    
        body: "just came back from this beautiful country. Inexpensive(compared to western Europe), amazing food and wine, and the Croats are very hospitable! ",
        date: new Date(2022, 2, 2),
        image: 'https://www.twowanderingsoles.com/wp-content/uploads/2021/07/img_60ee7b1038250.jpg'
    },
    {
        title: "Point Reyes is heaven on Earth!!",
        subject: "",    
        body: "2 hour drive up north from SF. Summer is the best time to go but be sure to bring a warm wind breaker but it can get pretty cold! Be sure to account for traffic",
        date: new Date(2022, 9, 3),
        image: 'https://olemahouse.com/wp-content/uploads/2020/02/Point-Reyes-Hiking.jpg'
    },
    {
        title: "The land of a thousand hills",
        subject: "Rwanda",    
        body: "a must visit for all travelers!! It’s hard to get tired of Rwanda because there is always something else you can add to your list. You can head west and kayak in Lake Kivu, or enjoy the nightlife and restaurants in Kigali. There are a number of museums to help you explore the country’s history such as the King’s Palace museum in Nyanza, or you can use a digital app to embark on the Liberation History Tourism Trail. If you feel like completing another hike, you can choose from 32 that are spread out around the country.",
        date: new Date(2022, 5, 4),
        image: 'https://static.euronews.com/articles/stories/06/82/65/26/1100x619_cmsv2_b03e837c-82f0-5873-99a9-d12395b4bdc4-6826526.jpg'
    }


];


module.exports = Posts