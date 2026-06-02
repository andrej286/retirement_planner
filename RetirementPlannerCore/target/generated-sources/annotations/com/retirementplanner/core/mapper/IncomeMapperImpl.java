package com.retirementplanner.core.mapper;

import com.retirementplanner.core.model.Frequency;
import com.retirementplanner.core.model.IncomeModel;
import com.retirementplanner.persistence.entity.IncomeEntity;
import com.retirementplanner.persistence.entity.UserEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-02T21:48:14+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class IncomeMapperImpl implements IncomeMapper {

    @Override
    public IncomeModel toModel(IncomeEntity entity) {
        if ( entity == null ) {
            return null;
        }

        IncomeModel incomeModel = new IncomeModel();

        incomeModel.setUserID( entityUserUserID( entity ) );
        incomeModel.setIncomeID( entity.getIncomeID() );
        incomeModel.setType( entity.getType() );
        incomeModel.setAmount( entity.getAmount() );
        incomeModel.setFrequency( frequencyToFrequency( entity.getFrequency() ) );

        return incomeModel;
    }

    @Override
    public IncomeEntity toEntity(IncomeModel model) {
        if ( model == null ) {
            return null;
        }

        IncomeEntity incomeEntity = new IncomeEntity();

        incomeEntity.setIncomeID( model.getIncomeID() );
        incomeEntity.setType( model.getType() );
        incomeEntity.setAmount( model.getAmount() );
        incomeEntity.setFrequency( frequencyToFrequency1( model.getFrequency() ) );

        return incomeEntity;
    }

    private Long entityUserUserID(IncomeEntity incomeEntity) {
        if ( incomeEntity == null ) {
            return null;
        }
        UserEntity user = incomeEntity.getUser();
        if ( user == null ) {
            return null;
        }
        Long userID = user.getUserID();
        if ( userID == null ) {
            return null;
        }
        return userID;
    }

    protected Frequency frequencyToFrequency(com.retirementplanner.persistence.entity.Frequency frequency) {
        if ( frequency == null ) {
            return null;
        }

        Frequency frequency1;

        switch ( frequency ) {
            case MONTHLY: frequency1 = Frequency.MONTHLY;
            break;
            case YEARLY: frequency1 = Frequency.YEARLY;
            break;
            case ONE_TIME: frequency1 = Frequency.ONE_TIME;
            break;
            default: throw new IllegalArgumentException( "Unexpected enum constant: " + frequency );
        }

        return frequency1;
    }

    protected com.retirementplanner.persistence.entity.Frequency frequencyToFrequency1(Frequency frequency) {
        if ( frequency == null ) {
            return null;
        }

        com.retirementplanner.persistence.entity.Frequency frequency1;

        switch ( frequency ) {
            case MONTHLY: frequency1 = com.retirementplanner.persistence.entity.Frequency.MONTHLY;
            break;
            case YEARLY: frequency1 = com.retirementplanner.persistence.entity.Frequency.YEARLY;
            break;
            case ONE_TIME: frequency1 = com.retirementplanner.persistence.entity.Frequency.ONE_TIME;
            break;
            default: throw new IllegalArgumentException( "Unexpected enum constant: " + frequency );
        }

        return frequency1;
    }
}
