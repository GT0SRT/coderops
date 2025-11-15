import React, { useState } from 'react'
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.webp'
import img7 from '../assets/img7.webp'
import img8 from '../assets/img8.webp'
import img9 from '../assets/img9.webp'
import img10 from '../assets/img10.webp'
import img11 from '../assets/img11.webp'
import img12 from '../assets/img12.webp'
import img13 from '../assets/img13.webp'
import img14 from '../assets/img14.webp'
import img15 from '../assets/img15.webp'
import img16 from '../assets/img16.webp'
import img17 from '../assets/img17.webp'
import img18 from '../assets/img18.webp'
import img19 from '../assets/img19.webp'
import img20 from '../assets/img20.webp'
import img21 from '../assets/img21.webp'
import img22 from '../assets/img22.webp'
import img23 from '../assets/img23.webp'
import img24 from '../assets/img24.webp'
import img25 from '../assets/img25.webp'
import img26 from '../assets/img26.webp'
import img27 from '../assets/img27.webp'
import img28 from '../assets/img28.webp'
import img29 from '../assets/img29.webp'
import img30 from '../assets/img30.webp'
import img31 from '../assets/img31.webp'
import img32 from '../assets/img32.webp'
import img33 from '../assets/img33.webp'

const data = [
    {
        name: "Shane Weber",
        description: "effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.",
        edits: [
            { img: img1, title: "Drift — A04", model: "Amelia Hart" },
            { img: img2, title: "Veil — K18", model: "Irina Volkova" },
            { img: img3, title: "Ember — M45", model: "Charlotte Byrne" },
            { img: img4, title: "Gleam — S12", model: "Anastasia Morozova" },
            { img: img5, title: "Bloom — J29", model: "Sophia White" },
            { img: img6, title: "Whisper — V87", model: "Polina Sokolova" },
            { img: img7, title: "Trace — Z05", model: "Ava Mitchell" },
            { img: img8, title: "Flicker — Q62", model: "Maria Ivanenko" },
            { img: img9, title: "Grain — H71", model: "Yulia Morozova" },
            { img: img10, title: "Pulse — B90", model: "Viktoria Kuznetsova" },
            { img: img11, title: "Mist — L36", model: "Amelia Parker" },
            { img: img12, title: "Shard — Y22", model: "Daria Smirnova" },
            { img: img13, title: "Vapor — X79", model: "Zoe Adams" },
            { img: img14, title: "Glow — F13", model: "Anastasiya Orlova" },
            { img: img15, title: "Flux — N48", model: "Mia Bennett" },
            { img: img16, title: "Spire — C65", model: "Natalia Volkova" }
        ]
    },
    {
        name: "Manika Jorge",
        description: "effect 02: Adjusts mover count, rotation, timing, and animation feel.",
        edits: [
            { img: img17, title: "Driftwood — W50", model: "Ekaterina Romanova" },
            { img: img18, title: "Fold — T81", model: "Chloe Evans" },
            { img: img19, title: "Shroud — E26", model: "Aria Robinson" },
            { img: img20, title: "Ripple — P34", model: "Daria Petrova" },
            { img: img21, title: "Fray — U07", model: "Ekaterina Smirnova" },
            { img: img22, title: "Wane — R52", model: "Emily Robinson" },
            { img: img23, title: "Tide — S33", model: "Madison Brooks" },
            { img: img24, title: "Rift — G08", model: "Ekaterina Ivanova" },
            { img: img25, title: "Spool — H94", model: "Anna Mikhailova" },
            { img: img26, title: "Glitch — M70", model: "Emily Brown" },
            { img: img27, title: "Slip — F02", model: "Mia Anderson" },
            { img: img28, title: "Husk — C15", model: "Ksenia Egorova" },
            { img: img29, title: "Blur — V86", model: "Sofia Lebedeva" },
            { img: img30, title: "Fracture — A63", model: "Harper Gray" },
            { img: img31, title: "Mote — Y39", model: "Isabella Young" },
            { img: img32, title: "Aura — K21", model: "Elizaveta Petrova" }
        ]
    },
    {
        name: "Angela Wong",
        description: "effect 03: Big arcs, smooth start, powerful snap, slow reveal.",
        edits: [
            { img: img33, title: "Whorl — B45", model: "Ekaterina Romanova" },
            { img: img1, title: "Flicker — D17", model: "Sophia White" },
            { img: img2, title: "Gleam — Z58", model: "Polina Sokolova" },
            { img: img3, title: "Shard — J03", model: "Ava Mitchell" },
            { img: img4, title: "Trace — Q29", model: "Maria Ivanenko" },
            { img: img5, title: "Crush — W92", model: "Yulia Morozova" },
            { img: img6, title: "Veil — X16", model: "Viktoria Kuznetsova" },
            { img: img7, title: "Clasp — S84", model: "Amelia Parker" },
            { img: img8, title: "Flint — T66", model: "Daria Smirnova" },
            { img: img9, title: "Spire — E49", model: "Zoe Adams" },
            { img: img10, title: "Plume — N22", model: "Anastasiya Orlova" },
            { img: img11, title: "Hollow — B75", model: "Mia Bennett" },
            { img: img12, title: "Brume — K10", model: "Natalia Volkova" },
            { img: img13, title: "Crave — F37", model: "Chloe Evans" },
            { img: img14, title: "Quiver — R19", model: "Aria Robinson" },
            { img: img15, title: "Fathom — L52", model: "Daria Petrova" }
        ]
    },
    {
        name: "Kaito Nakamo",
        description: "effect 04: Quick upward motion with bold blending and smooth slow reveal.",
        edits: [
            { img: img16, title: "Pulse — D61", model: "Ekaterina Smirnova" },
            { img: img17, title: "Fade — P42", model: "Emily Robinson" },
            { img: img18, title: "Wisp — T14", model: "Madison Brooks" },
            { img: img19, title: "Fragment — G77", model: "Ekaterina Ivanova" },
            { img: img20, title: "Spiral — Y24", model: "Anna Mikhailova" },
            { img: img21, title: "Trace — Z85", model: "Emily Brown" },
            { img: img22, title: "Flare — C11", model: "Mia Anderson" },
            { img: img23, title: "Chasm — R05", model: "Ksenia Egorova" },
            { img: img24, title: "Bloom — N38", model: "Sofia Lebedeva" },
            { img: img25, title: "Shard — W20", model: "Harper Gray" },
            { img: img26, title: "Mist — S12", model: "Isabella Young" },
            { img: img27, title: "Crush — E31", model: "Lily Cooper" },
            { img: img28, title: "Ripple — F68", model: "Olivia Reed" },
            { img: img29, title: "Gossamer — A07", model: "Grace Walker" },
            { img: img30, title: "Floe — K96", model: "Sofia Orlova" },
            { img: img31, title: "Shiver — V44", model: "Natalia Ivanova" }
        ]
    },
]

const Hero = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedEdit, setSelectedEdit] = useState(null);

    const handleSelectEdit = (idx, subidx) => {
        setSelectedEdit({ idx, subidx });
        setIsClicked(true);
    }

    return (
        <>
            {data.map((item, idx) => (
                <div className='mb-36 animate-fade-in-up' key={idx}>
                    <div className='flex flex-col md:flex-row mt-20 -mb-5'>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-black/90 font-noto-mono uppercase tracking-tighter">
                            {item.name}
                        </h1>
                        <div className='ml-auto mt-auto font-semibold text-sm tracking-tighter'>
                            {item.description}
                            <span className='font-bold m-2 text-lg'>•</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 md:grid-cols-8 gap-3'>
                        {item.edits.map((edit, index) => (
                            <div onClick={() => handleSelectEdit(idx, index)}
                                className='col-span-1 hover:cursor-pointer flex flex-col mt-10'>
                                <img src={edit.img} className='hover:opacity-75' />
                                <div className='ml-auto font-bold text-sm'>
                                    {edit.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {
                isClicked && (
                    <div className='fixed inset-0 bg-white z-50 p-7 grid grid-cols-2'>
                        <div className='md:hidden block h-[90%] col-span-1'>
                            <img src={data[selectedEdit.idx].edits[selectedEdit.subidx].img}
                                className='h-[90%]' />
                        </div>
                        <div className='md:mt-[80%] text-sm col-span-2 md:col-span-1 ml-auto md:ml-0 mt-auto
                        text-right md:text-left'>
                            <div className='font-bold'>
                                {data[selectedEdit.idx].edits[selectedEdit.subidx].title}
                            </div>
                            <div>model: <span>{data[selectedEdit.idx].edits[selectedEdit.subidx].model}</span></div>
                            <button onClick={() => setIsClicked(false)} className="absolute text-red-700 font-sans cusrsor-pointer">
                                close
                            </button>
                        </div>
                        <div className='hidden p-3 ml-auto h-screen col-span-1 mr-7 items-center justify-center md:flex'>
                            {/* <img src={data[selectedEdit.idx].edits[selectedEdit.subidx].img}
                                className='h-[10%]' />
                            <img src={data[selectedEdit.idx].edits[selectedEdit.subidx].img}
                                className='h-[20%]' />
                            <img src={data[selectedEdit.idx].edits[selectedEdit.subidx].img}
                                className='h-[30%]' />
                            <img src={data[selectedEdit.idx].edits[selectedEdit.subidx].img}
                                className='h-[40%]' />
                            <img src={data[selectedEdit.idx].edits[selectedEdit.subidx].img}
                                className='h-[50%]' /> */}
                            <img src={data[selectedEdit.idx].edits[selectedEdit.subidx].img}
                                className='h-[90%]' />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Hero