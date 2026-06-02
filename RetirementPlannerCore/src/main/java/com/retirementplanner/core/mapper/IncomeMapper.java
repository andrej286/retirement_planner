package com.retirementplanner.core.mapper;

import com.retirementplanner.core.model.IncomeDto;
import com.retirementplanner.persistence.entity.IncomeEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface IncomeMapper {
    @Mapping(target = "userID", source = "user.userID")
    IncomeDto toModel(IncomeEntity entity);

    @Mapping(target = "user", ignore = true)
    IncomeEntity toEntity(IncomeDto model);
}
