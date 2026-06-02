package com.retirementplanner.core.mapper;

import com.retirementplanner.core.model.ExpenseModel;
import com.retirementplanner.core.model.IncomeModel;
import com.retirementplanner.core.model.InvestmentModel;
import com.retirementplanner.core.model.UserModel;
import com.retirementplanner.persistence.entity.ExpenseEntity;
import com.retirementplanner.persistence.entity.IncomeEntity;
import com.retirementplanner.persistence.entity.InvestmentEntity;
import com.retirementplanner.persistence.entity.UserEntity;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-02T21:48:15+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Autowired
    private IncomeMapper incomeMapper;
    @Autowired
    private ExpenseMapper expenseMapper;
    @Autowired
    private InvestmentMapper investmentMapper;

    @Override
    public UserModel toModel(UserEntity entity) {
        if ( entity == null ) {
            return null;
        }

        UserModel userModel = new UserModel();

        userModel.setUserID( entity.getUserID() );
        userModel.setUsername( entity.getUsername() );
        userModel.setEmail( entity.getEmail() );
        userModel.setPassword( entity.getPassword() );
        userModel.setDateOfBirth( entity.getDateOfBirth() );
        userModel.setRetirementYear( entity.getRetirementYear() );
        userModel.setIncomes( incomeEntityListToIncomeModelList( entity.getIncomes() ) );
        userModel.setExpenses( expenseEntityListToExpenseModelList( entity.getExpenses() ) );
        userModel.setInvestments( investmentEntityListToInvestmentModelList( entity.getInvestments() ) );

        return userModel;
    }

    @Override
    public UserEntity toEntity(UserModel model) {
        if ( model == null ) {
            return null;
        }

        UserEntity userEntity = new UserEntity();

        userEntity.setUserID( model.getUserID() );
        userEntity.setUsername( model.getUsername() );
        userEntity.setEmail( model.getEmail() );
        userEntity.setPassword( model.getPassword() );
        userEntity.setDateOfBirth( model.getDateOfBirth() );
        userEntity.setRetirementYear( model.getRetirementYear() );
        userEntity.setIncomes( incomeModelListToIncomeEntityList( model.getIncomes() ) );
        userEntity.setExpenses( expenseModelListToExpenseEntityList( model.getExpenses() ) );
        userEntity.setInvestments( investmentModelListToInvestmentEntityList( model.getInvestments() ) );

        return userEntity;
    }

    protected List<IncomeModel> incomeEntityListToIncomeModelList(List<IncomeEntity> list) {
        if ( list == null ) {
            return null;
        }

        List<IncomeModel> list1 = new ArrayList<IncomeModel>( list.size() );
        for ( IncomeEntity incomeEntity : list ) {
            list1.add( incomeMapper.toModel( incomeEntity ) );
        }

        return list1;
    }

    protected List<ExpenseModel> expenseEntityListToExpenseModelList(List<ExpenseEntity> list) {
        if ( list == null ) {
            return null;
        }

        List<ExpenseModel> list1 = new ArrayList<ExpenseModel>( list.size() );
        for ( ExpenseEntity expenseEntity : list ) {
            list1.add( expenseMapper.toModel( expenseEntity ) );
        }

        return list1;
    }

    protected List<InvestmentModel> investmentEntityListToInvestmentModelList(List<InvestmentEntity> list) {
        if ( list == null ) {
            return null;
        }

        List<InvestmentModel> list1 = new ArrayList<InvestmentModel>( list.size() );
        for ( InvestmentEntity investmentEntity : list ) {
            list1.add( investmentMapper.toModel( investmentEntity ) );
        }

        return list1;
    }

    protected List<IncomeEntity> incomeModelListToIncomeEntityList(List<IncomeModel> list) {
        if ( list == null ) {
            return null;
        }

        List<IncomeEntity> list1 = new ArrayList<IncomeEntity>( list.size() );
        for ( IncomeModel incomeModel : list ) {
            list1.add( incomeMapper.toEntity( incomeModel ) );
        }

        return list1;
    }

    protected List<ExpenseEntity> expenseModelListToExpenseEntityList(List<ExpenseModel> list) {
        if ( list == null ) {
            return null;
        }

        List<ExpenseEntity> list1 = new ArrayList<ExpenseEntity>( list.size() );
        for ( ExpenseModel expenseModel : list ) {
            list1.add( expenseMapper.toEntity( expenseModel ) );
        }

        return list1;
    }

    protected List<InvestmentEntity> investmentModelListToInvestmentEntityList(List<InvestmentModel> list) {
        if ( list == null ) {
            return null;
        }

        List<InvestmentEntity> list1 = new ArrayList<InvestmentEntity>( list.size() );
        for ( InvestmentModel investmentModel : list ) {
            list1.add( investmentMapper.toEntity( investmentModel ) );
        }

        return list1;
    }
}
