import React from 'react'

const WeddingCeremony = () => {
  return (
    <>
      <h3 className="m-8 font-bold text-center">เลือก Package</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between gap-10">
          <CardItem id="engage1" body="พิธีหมั้น + ยกน้ำชา" />
          <CardItem
            id="engage2"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์"
          />
          <CardItem
            id="engage3"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + พิธีสงฆ์"
          />
        </div>
      </div>
    </>
  )
}

export default WeddingCeremony