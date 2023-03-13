import { User } from './../../users/entities/user.entity';
class Vaquinha {
  id: string;
  name: string;
  price: number;
  userAdmin: string;
  memberCount: number;
  vaquinhaMembers: User[];
}

export default Vaquinha;
