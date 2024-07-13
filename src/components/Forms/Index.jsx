import Head from "./Head";
import Summary from "./Summary";
import Experience from "./Experience";
import Skills from "./Skills";

const Index = ({
  pageno,
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
  place,
  setPlace,
  summary,
  setSummary,
  experience,
  setExperience,
  skills,
  setSkills,
}) => {
  return (
    <div className="h-[80vh]">
     {pageno === 1 && (
        <Head
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          number={number}
          setNumber={setNumber}
          place={place}
          setPlace={setPlace}
        />
      )}
      {pageno === 2 && <Summary summary={summary} setSummary={setSummary} />}
      {pageno === 3 && (
        <Experience experience={experience} setExperience={setExperience} />
      )}
      {pageno === 4 && <Skills skills={skills} setSkills={setSkills} />}
    </div>
  );
};

export default Index;
