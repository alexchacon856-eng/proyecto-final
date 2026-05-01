import { Injectable, ConflictException, NotFoundException } from '@nestjs/common'; // Mejores excepciones
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';  
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Cambiado a singular para ser estándar
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, email, name } = createUserDto; // Asegúrate que el DTO use nombreCompleto
    
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      name, // Cambiado de 'name' a 'nombreCompleto'
      email,
      password: hashedPassword,
    });
    
    return await this.userRepository.save(newUser);
  }

  // Modificamos esto para que la tabla de React no muestre a los "eliminados"
  async findAll() {
    return await this.userRepository.find({
      where: { isActive: true } 
    });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  // ELIMINACIÓN LÓGICA (Corregida)
  async remove(id: number) {
    const user = await this.findOne(id); // Reutiliza el método que ya lanza la excepción
    
    user.isActive = false; // "Apagamos" al usuario sin borrarlo
    await this.userRepository.save(user);
    
    return { message: `Usuario #${id} desactivado correctamente` };
  }
}