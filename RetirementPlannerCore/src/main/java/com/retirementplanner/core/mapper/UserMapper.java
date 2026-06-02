package com.retirementplanner.core.mapper;

import com.retirementplanner.core.model.UserDto;
import com.retirementplanner.persistence.entity.UserEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {IncomeMapper.class, ExpenseMapper.class, InvestmentMapper.class})
public interface UserMapper {
    UserDto toModel(UserEntity entity);
    UserEntity toEntity(UserDto model);
}
