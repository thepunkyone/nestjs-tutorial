import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from "@nestjs/common";

@Controller('coffees')
export class CoffeesController {
  @Get('flavours')
  findAll() {
    return 'This action returns all coffees.';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee.`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
}
