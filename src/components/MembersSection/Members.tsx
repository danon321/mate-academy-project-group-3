import { membersData } from '../../membersData';
import Member from '../Member/Member';

const MembersSection = () => {
  return (
    <section>
      {membersData.map((member) => (
        <Member
          key={member.id}
          fullName={member.fullName}
          imgSrc={member.imgSrc}
          position={member.position}
        />
      ))}
    </section>
  );
};

export default MembersSection;
