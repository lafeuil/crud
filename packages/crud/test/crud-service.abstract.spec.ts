import { BadRequestException, NotFoundException } from '@nestjs/common';

import { TestService } from './__fixture__/test.service';

describe('#crud', () => {
  describe('#CrudService', () => {
    let service: TestService<any>;

    beforeAll(() => {
      service = new TestService();
    });

    describe('#throwBadRequestException', () => {
      it('should throw BadRequestException', () => {
        expect(service.throwBadRequestException.bind(service, '')).toThrowError(
          BadRequestException,
        );
      });
    });

    describe('#throwNotFoundException', () => {
      it('should throw NotFoundException', () => {
        expect(service.throwNotFoundException.bind(service, '')).toThrowError(
          NotFoundException,
        );
      });
    });
  });
});
