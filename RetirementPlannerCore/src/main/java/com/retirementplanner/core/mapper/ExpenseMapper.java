package com.retirementplanner.core.mapper;

import com.retirementplanner.core.model.ExpenseModel;
import com.retirementplanner.persistence.entity.ExpenseEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ExpenseMapper {
    @Mapping(target = "userID", source = "user.userID")
    ExpenseModel toModel(ExpenseEntity entity);

    @Mapping(target = "user", ignore = true)
    ExpenseEntity toEntity(ExpenseModel model);
}
