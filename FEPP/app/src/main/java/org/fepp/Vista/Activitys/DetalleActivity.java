package org.fepp.Vista.Activitys;

import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import org.fepp.R;
import org.fepp.Vista.Adapter.AdapterViewPager;
import org.fepp.Vista.Fragments.FragmentEvento;

import java.util.ArrayList;

public class DetalleActivity extends AppCompatActivity {

    private ViewPager viewPager;
    private TabLayout tabLayout;
    private ArrayList<Fragment> fragments;
    private ArrayList<String> titulos;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detalle);
        tabLayout=findViewById(R.id.tab_detalle);
        viewPager=findViewById(R.id.viewpager_detalle);
        fragments=new ArrayList<>();
        titulos=new ArrayList<>();
        init();
    }
    private void init(){
        fragments.add(FragmentEvento.newInstance());
        fragments.add(FragmentEvento.newInstance());
        fragments.add(FragmentEvento.newInstance());
        titulos.add("Eventos");
        titulos.add("Registro");
        titulos.add("Insumos");
        AdapterViewPager adapter=new AdapterViewPager(getSupportFragmentManager(),
                fragments,
                titulos);
        viewPager.setAdapter(adapter);
        tabLayout.setupWithViewPager(viewPager);

    }
}
