package org.fepp.Vista.Activitys;

import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import org.fepp.R;
import org.fepp.Vista.Adapter.AdapterViewPager;
import org.fepp.Vista.Fragments.FragmentEvento;
import org.fepp.Vista.Fragments.FragmentMain;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_evento);

        getSupportFragmentManager().beginTransaction()
                .replace(R.id.contenedor_main,
                        FragmentMain.newInstance(),
                        FragmentMain.TAG)
                .commit();
    }

}
