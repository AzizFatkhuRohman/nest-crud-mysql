import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>
  ){}
  async create(createNoteDto: CreateNoteDto) {
    return await this.noteRepository.save(createNoteDto);
  }

  async findAll() {
    return await this.noteRepository.find();
  }

  async findOne(id: number) {
    return await this.noteRepository.findOneBy({id});
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    return await this.noteRepository.update(id, updateNoteDto);
  }

  async remove(id: number) {
    return await this.noteRepository.delete(id);
  }
}
