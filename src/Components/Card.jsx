import React from 'react'

const Card = () => {
    const cardInfo = [
        {
            backgroundColor: 'bg-slate-200',
            imageLink: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60',
            title: 'Sneaker Pro Max'
        },
        {
            backgroundColor: 'bg-green-100',
            imageLink: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww',
            title: 'Runner Elite 2023'
        },
        {
            backgroundColor: 'bg-blue-100',
            imageLink: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww',
            title: 'Trail Blazer X'
        },
        {
            backgroundColor: 'bg-amber-100',
            imageLink: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
            title: 'Urban Kicks'
        },
        {
            backgroundColor: 'bg-slate-50',
            imageLink: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
            title: 'Comfort Walkers'
        },
        {
            backgroundColor: 'bg-red-100',
            imageLink: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnx2RGZvenBRT1ZrZ3x8ZW58MHx8fHx8',
            title: 'Sporty Sprint'
        },
        {
            backgroundColor: 'bg-slate-100',
            imageLink: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png',
            title: 'Trail Explorer'
        },
        {
            backgroundColor: 'bg-lime-200',
            imageLink: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b469d1c-aacb-43e7-8902-f801f5b85dc5/NIKE+PRECISION+VII.png',
            title: 'Hiking Pro'
        },
        {
            backgroundColor: 'bg-blue-100',
            imageLink: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aacf28ff-e1f5-4ee8-8cd0-fa4d054cd57a/AIR+JORDAN+1+MID+SE.png',
            title: 'City Strider'
        }
    ]

    return (
        <div className='flex flex-col items-center justify-center'>

            <div className="mt-4">
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <p className="text-gray-600 text-sm md:text-base font-medium">Also Available On</p>
                    </div>
                    <div className="flex space-x-4 mt-6">
                        <img src="/images/amazon.png" alt="Amazon" className="h-10" />
                        <img src="/images/flipkart.png" alt="Flipkart" className="h-10" />
                        <img src="https://th.bing.com/th?id=ODLS.cd15a358-eae9-4908-aa66-7f5a26a6d7e2&w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2" alt="Myntra" className="h-10" />
                        <img src="https://th.bing.com/th?id=ODLS.94f95dcf-2ea6-41e2-9455-e86f304b0596&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="Ajio" className="h-10" />
                    </div>
                </div>
            </div>

            <div className='cards m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 place-items-center'>
                {cardInfo.map((card, index) => {
                    return (
                        <div key={index} className={`relative m-14 flex w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 ${card.backgroundColor} shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-110`}>
                            <a className="relative mx-3 mt-3 flex items-center h-60 overflow-hidden rounded-xl" href="#">
                                <img className="object-cover rounded-xl" src={card.imageLink} alt="product image" />
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                            </a>
                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-mono tracking-tight text-slate-900">{card.title}</h5>
                                </a>

                                <a href="#" className="flex items-center justify-center mt-10 rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to cart</a
                                >
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default Card

