import React from 'react'

function Head() {
  return (
    <div className="w-[1046px] h-[50px] justify-start items-center gap-[563px] inline-flex  ">
    <div className="h-[29px] justify-center items-center gap-2 flex">
        <div className="text-stone-950 text-2xl font-bold font-['SF Pro Display'] leading-[28.80px] tracking-tight">Discover</div>
        <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4 relative">
            </div>
        </div>
        <div className="text-stone-400 text-xl font-medium font-['SF Pro Display'] leading-normal tracking-tight">Recently Played</div>
    </div>
    <div className="justify-start items-center gap-4 flex">
        <img className="w-[50px] h-[50px] relative rounded-xl" src="https://s3-alpha-sig.figma.com/img/1876/db94/adec6ad7f35e5a30b73b00a91492ca4e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P2PN4xZavLBBZ2sVbBbpGvM3TxJ39QvZQNVxPoH29sXlBy8QkZ27Lx3eSuTstL1T18yfgGzU-Bqf5alMvAaFJWgjWU9SwpHsl3h60JWTxbQVFyuHy~ekl0AJJzDZlkqSyNI1EBiOMtBMOgP~LmsRBJUr56C0w3BXmfi20~OjwMdYBuoguFL6F28g50skUYummYa6zwHITrqnJ4WSBb~7xV2oobpB7oNClwp6CFAZoU6bob87y1vzy7JUUFQ0MHQrY4E4qJiV1b1~4HjrpqM67lzgsltFF8VbUVbhiyvfgUErVTSsx5XOEgTuvIVB3fmi3WfgFsPQ-cNZhDRt0Og8Ew__" />
        <div className="justify-start items-center gap-[30px] flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-stone-950 text-base font-medium font-['SF Pro Display']">Wade Warren</div>
                <div className="text-stone-400 text-xs font-normal font-['SF Pro Display']">Premium</div>
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-4 h-4 relative">
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Head