
function temp() {
    const pages = [<Home/>, <Projects/>, <Skills/>, <About/>, <Contact/>];
    const pageRefs = useRef(pages.map(() => React.createRef()));

    useEffect(() => { 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0')
                    entry.target.classList.remove('opacity-0', 'translate-y-8')
                }
            });
        }, {threshold: 0.2});

        pageRefs.current.forEach(ref => {
            if(ref.current) {
                observer.observe(ref.current)
            }
        });

        return () => {
            pageRefs.current.forEach(ref => {
                if(ref.current) {
                    observer.unobserve(ref.current)
                }
            });
        }
    }, [pages]);
    return (
        <div>
        { 
          pages.map((page, index) => (
              <div key={index} ref={pageRefs.current[index]} className='transition-all duration-500 ease-out opacity-0 translate-y-8'>
                {page}
              </div>
          ))
        }
      </div>
    );
}

export default temp;