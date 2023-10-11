import './Section.css';

const Section = ({children, id, className}) => {
    const classes = className ? 'vtr_tm_section ' + className : 'vtr_tm_section';
    return <div id={id} className={classes}>{children}</div>;
}

export default Section;