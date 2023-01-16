import {Body,Controller,Get,HttpStatus, Inject, NotFoundException, Param, Post,Query } from "@nestjs/common";
import { AvisService } from "./avis.service";
import { AvisDto } from "./avisDto";

@Controller('avis')
export class AvisController {
    constructor(private readonly avisService: AvisService) {}

 @Post()
  create(@Body() avisDto: AvisDto) {
    return this.avisService.create(avisDto);
  }

  @Get()
  findAll() {
    return this.avisService.findAll();
  }
  @Get('/withComment/:id')
  findOneWithComments() {
    return this.avisService.findWithComments(':id');
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() avisDto: AvisDto) {
    return this.avisService.update(+id, avisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avisService.remove(+id);
  }

  


}
