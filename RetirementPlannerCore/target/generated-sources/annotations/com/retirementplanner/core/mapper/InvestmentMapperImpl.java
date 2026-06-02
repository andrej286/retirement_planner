package com.retirementplanner.core.mapper;

import com.retirementplanner.core.model.InvestmentModel;
import com.retirementplanner.persistence.entity.InvestmentEntity;
import com.retirementplanner.persistence.entity.UserEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-02T21:48:14+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class InvestmentMapperImpl implements InvestmentMapper {

    @Override
    public InvestmentModel toModel(InvestmentEntity entity) {
        if ( entity == null ) {
            return null;
        }

        InvestmentModel investmentModel = new InvestmentModel();

        investmentModel.setUserID( entityUserUserID( entity ) );
        investmentModel.setInvestmentID( entity.getInvestmentID() );
        investmentModel.setInitialAmount( entity.getInitialAmount() );
        investmentModel.setInterestRate( entity.getInterestRate() );
        investmentModel.setDuration( entity.getDuration() );

        return investmentModel;
    }

    @Override
    public InvestmentEntity toEntity(InvestmentModel model) {
        if ( model == null ) {
            return null;
        }

        InvestmentEntity investmentEntity = new InvestmentEntity();

        investmentEntity.setInvestmentID( model.getInvestmentID() );
        investmentEntity.setInitialAmount( model.getInitialAmount() );
        investmentEntity.setInterestRate( model.getInterestRate() );
        investmentEntity.setDuration( model.getDuration() );

        return investmentEntity;
    }

    private Long entityUserUserID(InvestmentEntity investmentEntity) {
        if ( investmentEntity == null ) {
            return null;
        }
        UserEntity user = investmentEntity.getUser();
        if ( user == null ) {
            return null;
        }
        Long userID = user.getUserID();
        if ( userID == null ) {
            return null;
        }
        return userID;
    }
}
