package com.retirementplanner.core.mapper;

import com.retirementplanner.core.model.InvestmentModel;
import com.retirementplanner.persistence.entity.InvestmentEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface InvestmentMapper {
    @Mapping(target = "userID", source = "user.userID")
    InvestmentModel toModel(InvestmentEntity entity);

    @Mapping(target = "user", ignore = true)
    InvestmentEntity toEntity(InvestmentModel model);
}
