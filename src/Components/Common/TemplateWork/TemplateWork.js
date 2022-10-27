import React, { useState } from 'react';
import gellary from "./../../../Data/templateimage.json";

const TemplateWork = () => {
    var imgCount = gellary.length;
    const [oddData, setOddData] = useState('')

    // useEffect(() => {
    //     let data = 1 ;
    //     while (data <= imgCount){
    //         console.log(data) ;
    //         setOddData(data)
    //         data += 2 ;
    //     }
    // },[])

    // console.log(oddData);
    
    return (
        <>
            <section className="template_work py-4 md:py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="text-center max-w-[884px] mx-auto mb-4 md:mb-16">
                <h2 className="font-bold text-xl md:text-[40px] leading-[60px] text-[#393e50] md:mb-6">
                  Templates that work
                </h2>
                <p className="font-medium text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                  Get a kick off on building your pages and bulletins! Pick a
                  plan that accommodates your business needs and make it your
                  own. Our drag and drop editors make it very simple for anybody
                  to tweak formats like an ace.
                </p>
              </div>

         

              {/* grid gellary */}
              <div className="custom_template_gal grid grid-col-1 md:grid-cols-4 grid-rows-3 gap-3 mt-10">
                {
                    gellary.map(item => 
                        <div key={item.id} className={`template_gal_item col-span-1`}>
                            <img className='w-full h-full rounded-[10px]' src={require(`./../../../assets/images/template/${item.img}.png`)} alt={item.id} />
                        </div>
                        
                        )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
};

export default TemplateWork;