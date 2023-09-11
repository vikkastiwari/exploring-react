import './Section.css';

function Section({children, className}){
    const classes = className ? 'vtr_tm_section' + className : 'vtr_tm_section';
    return <div className={classes}>{children}</div>;
}

export default Section;