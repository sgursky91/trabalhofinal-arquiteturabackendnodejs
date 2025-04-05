/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';

describe('ProjectsController', () => {
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
