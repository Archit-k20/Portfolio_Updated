import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const resumeDownloadLink =
    "https://drive.google.com/file/d/1jrCiNDgNz-BPgNHK-8IXtPFoWQvim-v1/view?usp=sharing";

  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5 max-w-[620px] lg:max-w-[560px]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Archit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern, user <br/>
            interfaces and web applications<br/>
            along with AI solutions.
          </p>
          <a href={resumeDownloadLink} target='_blank' rel='noopener noreferrer'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-[#915EFF] hover:bg-[#7e4ce6] text-white font-bold py-3 px-8 rounded-xl mt-5 shadow-lg'
            >
              Download Resume
            </motion.button>
          </a>
          <div className='mt-4 flex flex-wrap items-center gap-3'>
            <a
              href='https://github.com/Archit-k20'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#915EFF] hover:text-[#cbb4ff]'
            >
              <FaGithub className='text-base' />
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/archit-k20'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#915EFF] hover:text-[#cbb4ff]'
            >
              <FaLinkedin className='text-base' />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className='absolute inset-0 z-0 pointer-events-none'>
        <ComputersCanvas />
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 z-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
