import { Controller, Get } from '@nestjs/common';
import { ContentsService } from './contents.service';

@Controller()
export class ContentsController {
	constructor(private readonly contentsService: ContentsService) {}

	@Get()
	getHello(): string {
		return this.contentsService.getHello();
	}
}
