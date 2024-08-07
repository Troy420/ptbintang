import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card bg-blue-gradient-2 w-[100%]`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[70%] h-[70%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-primary text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section 
      id="features" 
      className={`${layout.section} ${styles.paddingX}`}
    >
      <div
        className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden' /> We'll handle the server.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>As Infrastructure and Digital IT, we can help to transform your business with cutting-edge technology to give bigger impact on the growth of your business.</p>

        <Button styles="mt-10"/>
      </div>

      <div
        className={`${layout.sectionImg} flex-col`}
      >
        {features.map((feature, index) => {
          return (
            <FeatureCard 
              key={feature.id}
              {...feature}
              index={index}
            />
          )
        }
        )}
      </div>
    </section>
  )
}

export default Business