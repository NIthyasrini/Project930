package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources", glue="org.stepdefinition",dryRun=false,monochrome=true,plugin= {"pretty","html:target","json:target/reports.json"})
public class TestRunnerClass {

}
