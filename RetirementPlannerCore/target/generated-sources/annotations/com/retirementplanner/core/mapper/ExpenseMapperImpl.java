package com.retirementplanner.core.mapper;

import com.retirementplanner.core.model.ExpenseModel;
import com.retirementplanner.core.model.Frequency;
import com.retirementplanner.persistence.entity.ExpenseEntity;
import com.retirementplanner.persistence.entity.UserEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-02T21:48:14+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class ExpenseMapperImpl implements ExpenseMapper {

    @Override
    public ExpenseModel toModel(ExpenseEntity entity) {
        if ( entity == null ) {
            return null;
        }

        ExpenseModel expenseModel = new ExpenseModel();

        expenseModel.setUserID( entityUserUserID( entity ) );
        expenseModel.setExpenseID( entity.getExpenseID() );
        expenseModel.setType( entity.getType() );
        expenseModel.setAmount( entity.getAmount() );
        expenseModel.setFrequency( frequencyToFrequency( entity.getFrequency() ) );

        return expenseModel;
    }

    @Override
    public ExpenseEntity toEntity(ExpenseModel model) {
        if ( model == null ) {
            return null;
        }

        ExpenseEntity expenseEntity = new ExpenseEntity();

        expenseEntity.setExpenseID( model.getExpenseID() );
        expenseEntity.setType( model.getType() );
        expenseEntity.setAmount( model.getAmount() );
        expenseEntity.setFrequency( frequencyToFrequency1( model.getFrequency() ) );

        return expenseEntity;
    }

    private Long entityUserUserID(ExpenseEntity expenseEntity) {
        if ( expenseEntity == null ) {
            return null;
        }
        UserEntity user = expenseEntity.getUser();
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
